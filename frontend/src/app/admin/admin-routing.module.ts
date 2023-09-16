import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { TheatreComponent } from './theatre/theatre.component';
import { EventComponent } from './theatre/event/event.component';
import { TicketComponent } from './theatre/ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'movies',
        loadChildren: () =>
          import('./movies/movies.module').then((m) => m.MoviesModule),
      },
      {
        path: 'music',
        loadChildren: () =>
          import('./music/music.module').then((m) => m.MusicModule),
      },
      {
        path: 'theatre',
        loadChildren: () =>
          import('./theatre/theatre.module').then((m) => m.TheatreModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
