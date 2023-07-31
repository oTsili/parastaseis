import { Component } from '@angular/core';
import { Concert } from '../../shared/multi-item-carousel/multi-item-carousel.interface';

@Component({
  selector: 'app-print-ticket',
  templateUrl: './print-ticket.component.html',
  styleUrls: ['./print-ticket.component.scss'],
})
export class PrintTicketComponent {
  concert: Concert;
  ticketsLeft: number = 100; // Replace this with the actual tickets left for the concert

  constructor() {}

  ngOnInit() {
    this.concert = history.state?.data;
  }
}
