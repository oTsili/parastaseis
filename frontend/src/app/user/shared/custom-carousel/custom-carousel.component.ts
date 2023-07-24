import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      state(
        'slide-in',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('void => slide-in', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in'),
      ]),
      transition('slide-in => void', [
        animate('500ms ease-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
  // animations: [
  //   trigger('carouselAnimation', [
  //     transition('void => *', [
  //       style({ opacity: 0 }),
  //       animate('300ms', style({ opacity: 1 })),
  //     ]),
  //     transition('* => void', [animate('300ms', style({ opacity: 0 }))]),
  //   ]),
  // ],
})
export class CustomCarouselComponent {
  @Input() slides: { src: string }[] = [];
  intervalId: NodeJS.Timer | null = null;
  isLoading = false;
  currentSlide = 0;
  carouselSlidesSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.preloadImages();

    this.slideShow();
  }

  ngOnDestroy(): void {
    // this.carouselSlidesSubscription.unsubscribe();
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  slideShow() {
    this.intervalId = setInterval(() => {
      this.onNextClick();
    }, 3000);
    // setInterval(() => {
    //   this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    // }, 3000);
  }

  stopSlideShow() {
    clearInterval(this.intervalId!);
    this.intervalId = null;
  }

  preloadImages() {
    this.isLoading = true;
    // this.carouselSlidesSubscription = this.customCarouselService
    //   .getCarouselSlides()
    //   .subscribe((response) => {
    //     // console.log(response);
    //     this.slides = response.carouselSlides;
    //     this.dynamicDatabase.slides = this.slides;
    //     this.isLoading = false;
    //   });
  }
}
