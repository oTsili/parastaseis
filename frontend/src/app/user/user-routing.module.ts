import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'edit-product',
  //   canLoad: [AuthGuard],
  //   component: EditProductComponent,
  //   data: {
  //     title: 'edit-product',
  //     breadcrumb: [
  //       {
  //         label: 'edit-product',
  //         url: 'edit-product',
  //       },
  //     ],
  //   },
  // },
  {
    path: 'mytickets',
    loadChildren: () =>
      import('./mytickets/mytickets.module').then((m) => m.MyticketsModule),
    data: {
      title: 'my-tickets',
      breadcrumb: {
        label: 'my-tickets',
        url: 'my-tickets',
      },
    },
  },
  {
    path: 'theatre',
    loadChildren: () =>
      import('./theatre-page/theatre-page.module').then(
        (m) => m.TheatrePageModule
      ),
    data: {
      title: 'theatre',
      breadcrumb: {
        label: 'theatre',
        url: 'theatre',
      },
    },
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
    data: {
      title: 'login',
      breadcrumb: {
        label: 'login',
        url: 'login',
      },
    },
  },
  // {
  //   path: 'theatre/reservation',
  //   loadChildren: () =>
  //     import('./shared/reservation-page/reservation-page.module').then(
  //       (m) => m.ReservationPageModule
  //     ),
  //   data: {
  //     title: 'reservation',
  //     breadcrumb: {
  //       label: 'reservation',
  //       url: 'theatre/reservation',
  //     },
  //   },
  // },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupModule),
    data: {
      title: 'signup',
      breadcrumb: {
        label: 'signup',
        url: 'signup',
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
