import { Component, OnInit } from '@angular/core';
import { MusicPageService } from './music-page.service';
import { CEvent } from '../../interfaces/event.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theatre-page',
  templateUrl: './theatre-page.component.html',
  styleUrls: ['./theatre-page.component.scss'],
})
export class MusicPageComponent implements OnInit {
  events: CEvent[];
  eventsSubscription: Subscription;
  constructor(private musicPageService: MusicPageService) {}

  ngOnInit(): void {
    this.eventsSubscription = this.musicPageService.onGetEvents().subscribe({
      next: (response) => {
        this.events = response.events;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
