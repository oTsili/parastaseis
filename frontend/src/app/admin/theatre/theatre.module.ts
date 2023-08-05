import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatreComponent } from './theatre.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConcertComponent } from './concert/concert.component';
import { TicketComponent } from './ticket/ticket.component';
import { TheatreRoutingModule } from './theatre-routing.module';

@NgModule({
  declarations: [TheatreComponent, ConcertComponent, TicketComponent],
  imports: [CommonModule, ReactiveFormsModule, TheatreRoutingModule],
})
export class TheatreModule {}
