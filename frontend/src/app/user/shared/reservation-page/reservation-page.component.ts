import { Component, OnInit } from '@angular/core';
import { Concert } from '../multi-item-carousel/multi-item-carousel.interface';
import { Ticket } from '../multi-item-carousel/Ticket.interface';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss'],
})
export class ReservationPageComponent implements OnInit {
  concert: Concert;
  data: { concert: Concert; ticket: Ticket };

  ticketsLeft: number = 100; // Replace this with the actual tickets left for the concert

  constructor() {}

  ngOnInit() {
    this.data = history.state?.data;
    this.concert = this.data.concert;
  }
}
