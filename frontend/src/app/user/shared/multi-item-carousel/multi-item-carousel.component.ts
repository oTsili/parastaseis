import { Component, ElementRef, Input } from '@angular/core';
import { Concert } from './multi-item-carousel.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multi-item-carousel',
  templateUrl: './multi-item-carousel.component.html',
  styleUrls: ['./multi-item-carousel.component.scss'],
})
export class MultiItemCarouselComponent {
  @Input() items: Concert[];
  @Input() title: { first: string; secondary: string };

  constructor(private router: Router, private elementRef: ElementRef) {}

  ngOnInit() {}

  navigateToLink(item: any) {
    this.router.navigate(['/theatre/reservation'], {
      state: { data: { concert: item } },
    });
  }

  scroll(direction: number) {
    const cardContainer =
      this.elementRef.nativeElement.querySelector('.carousel .cards');

    if (cardContainer) {
      const cardWidth = cardContainer.clientWidth;
      cardContainer.scrollLeft += cardWidth * direction;
    }
  }
}
