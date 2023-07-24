import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationPageComponent } from './reservation-page.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { TicketsComponent } from './tickets/tickets.component';
import { ShippingInformationComponent } from './shipping-information/shipping-information.component';
import { PrintTicketComponent } from './print-ticket/print-ticket.component';
import { ReservationPageRoutingModule } from './reservation-page-routing.module';

@NgModule({
  declarations: [
    ReservationPageComponent,
    TicketsComponent,
    ShippingInformationComponent,
    PrintTicketComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    BreadcrumbModule,
    ReservationPageRoutingModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     component: ReservationPageComponent,
    //   },
    // ]),
  ],
})
export class ReservationPageModule {}
