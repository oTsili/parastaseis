import { Component, Input } from '@angular/core';
import { Concert } from '../multi-item-carousel/multi-item-carousel.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() items: Concert[];

  constructor(private router: Router) {}

  navigateToLink(item: any) {
    this.router.navigate(['/theatre/reservation'], {
      state: { data: { concert: item } },
    });
  }
}
