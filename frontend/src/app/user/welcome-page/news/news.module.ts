import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { MultiItemCarouselModule } from '../../shared/multi-item-carousel/multi-item-carousel.module';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, MultiItemCarouselModule],
  exports: [NewsComponent],
})
export class NewsModule {}
