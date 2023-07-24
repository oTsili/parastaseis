import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Concert } from '../../multi-item-carousel/multi-item-carousel.interface';
import { Router } from '@angular/router';
import { Ticket } from '../../multi-item-carousel/Ticket.interface';

@Component({
  selector: 'app-shipping-information',
  templateUrl: './shipping-information.component.html',
  styleUrls: ['./shipping-information.component.scss'],
})
export class ShippingInformationComponent {
  @ViewChild('cardTypeInput') cardTypeInput: ElementRef;
  @ViewChild('cardTypeText') cardTypeText: ElementRef;
  @ViewChild('checkInput') checkInput: ElementRef;
  isOpen = false;
  isChecked = false;
  concert: Concert;
  ticket: Ticket;
  data: { concert: Concert; ticket: Ticket };
  cardTypes = [
    { title: 'Visa', value: 'visa' },
    { title: 'American Express', value: 'amex' },
    { title: 'MasterCard', value: 'mastercard' },
    { title: 'Discover', value: 'discover' },
  ];
  ticketsLeft: number = 100; // Replace this with the actual tickets left for the concert

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit() {
    this.data = history.state?.data;
    this.concert = this.data.concert;
    this.ticket = this.data.ticket;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  toggleChecked() {
    this.isChecked = !this.isChecked;
  }

  previous() {
    this.router.navigate(['/theatre/reservation/tickets'], {
      state: { data: { concert: this.concert, ticket: this.ticket } },
    });
  }

  showSelection(cardType: { title: string; value: string }) {
    this.renderer.setProperty(
      this.cardTypeInput.nativeElement,
      'value',
      cardType.value
    );
    this.renderer.setProperty(
      this.cardTypeText.nativeElement,
      'innerHTML',
      '<i class="cc ' + cardType.value + ' icon"></i>' + cardType.title
    );
    this.renderer.setStyle(
      this.cardTypeText.nativeElement,
      'color',
      'rgba(0, 0, 0, 0.87)'
    );
  }
}
