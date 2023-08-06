import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../interfaces/event.interface';

const BACKEND_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class TheatrePageService {
  constructor(private httpClient: HttpClient) {}

  onGetEvents() {
    return this.httpClient
      .get<any>(`${BACKEND_URL}/event/Theatre`, {
        withCredentials: true,
      })
      .pipe(
        map((response) => {
          console.log(response);
          response.events.forEach((event: Event) => {
            console.log(event);
            event.coverImage = `${BACKEND_URL.replace(
              '/api',
              ''
            )}/${event.coverImage.replace('static/', '')}`;
            event.simpleImage = `${BACKEND_URL.replace(
              '/api',
              ''
            )}/${event.simpleImage.replace('static/', '')}`;
          });
          return response;
        })
      );
  }
}
