import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../../interfaces/Ticket.interface';
import { Event } from '../../interfaces/event.interface';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent {
  event: Event;
  data: { event: Event; ticket: Ticket };

  tickets = [
    {
      time: '16:30',
      date: 'July 15, 2023',
      price: 6,
      type: 'normal',
      seats: 15,
    },
    {
      time: '16:30',
      date: 'July 15, 2023',
      price: 3,
      type: 'social',
      seats: 5,
    },
    {
      time: '18:30',
      date: 'July 15, 2023',
      price: 6,
      type: 'normal',
      seats: 15,
    },
    {
      time: '18:30',
      date: 'July 15, 2023',
      price: 3,
      type: 'social',
      seats: 5,
    },
    {
      time: '20:30',
      date: 'July 15, 2023',
      price: 6,
      type: 'normal',
      seats: 15,
    },
    {
      time: '20:30',
      date: 'July 15, 2023',
      price: 3,
      type: 'social',
      seats: 5,
    },
    {
      time: '16:30',
      date: 'July 16, 2023',
      price: 6,
      type: 'normal',
      seats: 15,
    },
    {
      time: '16:30',
      date: 'July 16, 2023',
      price: 3,
      type: 'social',
      seats: 5,
    },
    {
      time: '18:30',
      date: 'July 15, 2023',
      price: 6,
      type: 'normal',
      seats: 15,
    },
    {
      time: '18:30',
      date: 'July 15, 2023',
      price: 3,
      type: 'social',
      seats: 5,
    },
    {
      time: '20:30',
      date: 'July 15, 2023',
      price: 6,
      type: 'normal',
      seats: 15,
    },
    {
      time: '20:30',
      date: 'July 15, 2023',
      price: 3,
      type: 'social',
      seats: 5,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.data = history.state?.data;
    this.event = this.data.event;
    console.log(this.tickets);
  }
  isLoggedIn() {
    // Example: Check if the user is logged in
    return true;
  }

  buyTicket(event: Event, ticket: Ticket) {
    this.router.navigate([`${event.url}/shippingInformation`], {
      state: { data: { event: this.event, ticket } },
    });
  }
}
