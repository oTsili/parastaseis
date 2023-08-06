import { Component, OnInit } from '@angular/core';
import { Ticket } from '../interfaces/Ticket.interface';
import { Event } from '../interfaces/event.interface';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss'],
})
export class ReservationPageComponent implements OnInit {
  event: Event;
  ticket: Ticket;
  data: { event: Event; ticket: Ticket };

  ticketsLeft: number = 100; // Replace this with the actual tickets left for the event

  constructor() {}

  ngOnInit() {
    this.data = history.state?.data;
    this.event = this.data.event;
    this.ticket = this.data.ticket;
  }
}
