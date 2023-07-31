import { Component } from '@angular/core';
import { Concert } from '../../shared/multi-item-carousel/multi-item-carousel.interface';
import { Router } from '@angular/router';
import { Ticket } from '../../shared/multi-item-carousel/Ticket.interface';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent {
  concert: Concert;
  data: { concert: Concert; ticket: Ticket };

  constructor(private router: Router) {}

  ngOnInit() {
    this.data = history.state?.data;
    this.concert = this.data.concert;
  }
  isLoggedIn() {
    // Example: Check if the user is logged in
    return true;
  }

  buyTicket(concert: Concert, ticket: Ticket) {
    this.router.navigate(['/theatre/reservation/shippingInformation'], {
      state: { data: { concert: this.concert, ticket } },
    });
  }
}
