import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const BACKEND_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class ReservationPageService {
  constructor(private httpClient: HttpClient) {}

  updateTicket(event: string, socialType: string, seats: number) {
    return this.httpClient.put<any>(
      `${BACKEND_URL}/event/ticket/${event}`,
      { seats, socialType },
      {
        withCredentials: true,
      }
    );
  }
}
