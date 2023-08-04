import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { MusicModule } from './music/music.module';
import { TheatreModule } from './theatre/theatre.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeModule,
    MoviesModule,
    MusicModule,
    TheatreModule,
  ],
})
export class AdminModule {}
