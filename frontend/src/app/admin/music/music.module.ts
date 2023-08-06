import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MusicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: MusicComponent,
      },
    ]),
  ],
})
export class MusicModule {}
