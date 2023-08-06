import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatreComponent } from './theatre.component';
import { EventComponent } from './event/event.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: TheatreComponent,
    children: [
      { path: '', redirectTo: 'event', pathMatch: 'full' },

      {
        path: 'event',
        component: EventComponent,
        pathMatch: 'full',
      },
      {
        path: 'ticket',
        component: TicketComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheatreRoutingModule {}
