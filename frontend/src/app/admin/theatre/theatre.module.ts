import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheatreComponent } from './theatre.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TheatreComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class TheatreModule {}
