import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user.interface';
import { SignupAuthData } from '../signup/signup.interface';

const BACKEND_URL = environment.BASE_URL + '/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private isAuthenticated: boolean = false;
  private token: string = '';
  isAuthenticated$ = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {}
  // get the listenr which updates the isAuthenticated variable whitout reaching the backend
  getAuthStatusListener() {
    return this.isAuthenticated$.asObservable();
  }

  // update the isAuthenticated variable whitout reaching the backend
  onUpdateAuthStatus(status: boolean) {
    // console.log({ status });
    this.isAuthenticated$.next(status);
  }

  onLogin(email: string, password: string) {
    return this.httpClient
      .post<User>(
        `${BACKEND_URL}/login`,
        { username: email, password },
        {
          withCredentials: true,
        }
      )
      .pipe(
        tap(() => {
          // inform the observers that the user's account information are now available
          this.onUpdateAuthStatus(true);
          // inform observers about account info availability
          // this.accountService.onUpdateAccount();
        })
      )
      .pipe(
        map((userData) => {
          console.log(userData);
          return userData;
        })
      );
  }

  onSignup(signupAuthData: SignupAuthData) {
    // const authData = new FormData();
    // authData.append('username', signupAuthData.username);
    // authData.append('firstName', signupAuthData.firstName);
    // authData.append('lastName', signupAuthData.lastName);
    // authData.append('signupDate', signupAuthData.signupDate);
    // authData.append('password', signupAuthData.password);
    // authData.append('passwordConfirm', signupAuthData.passwordConfirm);
    const authData = {
      username: signupAuthData.username,
      lastName: signupAuthData.lastName,
      firstName: signupAuthData.firstName,
      signupData: signupAuthData.signupDate,
      password: signupAuthData.password,
      passwordConfirm: signupAuthData.passwordConfirm,
    };

    console.log(authData);
    return this.httpClient
      .post<User>(`${BACKEND_URL}/signup`, authData, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          // inform the observers that the user's account information are now available
          this.onUpdateAuthStatus(true);
          // inform observers about account info availability
          // this.accountService.onUpdateAccount();
        })
      )
      .pipe(
        map((userData) => {
          console.log(userData);
          return userData;
        })
      );
  }

  // logout() {
  //   this.token = '';
  //   this.isAuthenticated = false;
  // }

  /**
   * @returns User object if isAuthenticated is true or 401 error status
   * if the isAuthenticated is false, after reaching the backend
   */
  isAuthenticated() {
    return this.httpClient
      .get<{
        userId: string;
        email: string;
        // account: Account;
      }>(`${BACKEND_URL}/isAuth`, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.onUpdateAuthStatus(true);
        })
      )
      .pipe(
        map((userData) => {
          const user = {
            id: userData.userId,
            email: userData.email,
            // account: userData.account,
          };
          // save user info to the browser's storage
          localStorage.setItem('user', JSON.stringify(user));

          return user;
        })
      );
  }

  // getAuthToken(): string {
  //   return this.token;
  // }

  // isLoggedIn(): boolean {
  //   return this.isAuthenticated;
  // }
}
