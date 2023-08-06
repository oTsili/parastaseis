import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatreComponent } from './theatre.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketComponent } from './ticket/ticket.component';
import { TheatreRoutingModule } from './theatre-routing.module';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [TheatreComponent, EventComponent, TicketComponent],
  imports: [CommonModule, ReactiveFormsModule, TheatreRoutingModule],
})
export class TheatreModule {}
