import { Component, OnInit } from '@angular/core';
import { TheatrePageService } from './theatre-page.service';
import { Event } from '../interfaces/event.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theatre-page',
  templateUrl: './theatre-page.component.html',
  styleUrls: ['./theatre-page.component.scss'],
})
export class TheatrePageComponent implements OnInit {
  events: Event[];
  eventsSubscription: Subscription;
  constructor(private theatrePageService: TheatrePageService) {}

  ngOnInit(): void {
    this.eventsSubscription = this.theatrePageService.onGetEvents().subscribe({
      next: (response) => {
        console.log(response);
        this.events = response.events;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
