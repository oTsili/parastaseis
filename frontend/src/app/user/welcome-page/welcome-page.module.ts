import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroModule } from './hero/hero.module';
import { MusicModule } from './music/music.module';
import { NewsModule } from './news/news.module';
import { PopularModule } from './popular/popular.module';
import { RecommendedModule } from './recommended/recommended.module';
import { SecondaryHeaderModule } from './secondary-header/secondary-header.module';
import { TheatreModule } from './theatre/theatre.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroModule,
    MusicModule,
    NewsModule,
    PopularModule,
    RecommendedModule,
    SecondaryHeaderModule,
    TheatreModule,
  ],
  exports: [
    HeroModule,
    MusicModule,
    NewsModule,
    PopularModule,
    RecommendedModule,
    SecondaryHeaderModule,
    TheatreModule,
  ],
})
export class WelcomePageModule {}
