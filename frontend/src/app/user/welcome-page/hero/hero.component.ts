import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  slides: { src: string }[] = [
    { src: 'assets/images/1.jpg' },
    { src: 'assets/images/2.jpg' },
    { src: 'assets/images/3.jpg' },
    { src: 'assets/images/4.jpg' },
    { src: 'assets/images/5.jpg' },
    { src: 'assets/images/6.jpg' },
  ];
}
