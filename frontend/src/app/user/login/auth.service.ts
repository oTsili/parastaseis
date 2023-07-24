import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private token: string = '';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http
      .post<{ accessToken: string }>('/user/login', { username, password })
      .pipe(
        tap((response) => {
          this.token = response.accessToken;
          this.isAuthenticated = true;
        })
      );
  }

  logout() {
    this.token = '';
    this.isAuthenticated = false;
  }

  getAuthToken(): string {
    return this.token;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
