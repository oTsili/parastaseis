import { Component, ElementRef } from '@angular/core';
import { Concert } from '../../shared/multi-item-carousel/multi-item-carousel.interface';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-print-ticket',
  templateUrl: './print-ticket.component.html',
  styleUrls: ['./print-ticket.component.scss'],
})
export class PrintTicketComponent {
  concert: Concert;
  ticketsLeft: number = 100; // Replace this with the actual tickets left for the concert

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.concert = history.state?.data;
  }

  downloadPDF() {
    this.exportToPDF();
  }

  async exportToPDF(): Promise<void> {
    const doc = new jsPDF();
    const ticketElement = this.elementRef.nativeElement;

    // Generate the PDF from the ticket's HTML
    if (ticketElement) {
      const canvas = await html2canvas(ticketElement);
      const imageData = canvas.toDataURL('image/png');
      doc.addImage(imageData, 'PNG', 15, 15, 180, 0);

      // Save the PDF as "concert_ticket.pdf" and offer it for download
      doc.save('concert_ticket.pdf');
    }
  }
}
