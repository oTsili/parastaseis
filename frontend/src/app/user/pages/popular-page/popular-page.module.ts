import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularPageComponent } from './popular-page.component';
import { HeaderModule } from '../../header/header.module';
import { CardListModule } from '../../shared/card-list/card-list.module';
import { FooterModule } from '../../footer/footer.module';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from '../../shared/breadcrumb/breadcrumb.module';
import { TheatrePageRoutingModule } from './popular-page-routing.module';

@NgModule({
  declarations: [PopularPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    CardListModule,
    FooterModule,
    BreadcrumbModule,
    TheatrePageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: PopularPageComponent,
      },
    ]),
  ],
})
export class NewPageModule {}
