import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string = '';
  password: string = '';
  message: string = '';
  theLoginForm: FormGroup;
  loginSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.theLoginForm = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  login(form: FormGroup) {
    console.log(form);
    if (form.invalid) {
      console.log('form invalid');
      return;
    }
    // this.isLoading = true;
    this.loginSubscription = this.authService
      .onLogin(form.value.email, form.value.password)
      .subscribe({
        next: (response) => {
          console.log({ response });
          // localStorage.setItem('user', JSON.stringify(response));
        },
        error: (error) => {
          // console.log(error);
          let errorMessage = error.error.message;
          // .split(':')[1].trim();
          console.log(errorMessage);
        },
      });
    // this.isLoading = false;
  }
}
