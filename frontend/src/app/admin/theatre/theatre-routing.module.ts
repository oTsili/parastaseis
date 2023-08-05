import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatreComponent } from './theatre.component';
import { ConcertComponent } from './concert/concert.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: TheatreComponent,
    children: [
      { path: '', redirectTo: 'concert', pathMatch: 'full' },

      {
        path: 'concert',
        component: ConcertComponent,
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
