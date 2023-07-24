import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { FooterModule } from '../footer/footer.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SignupComponent,
      },
    ]),
  ],
})
export class SignupModule {}
