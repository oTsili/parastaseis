import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.BASE_URL + '/admin';

@Injectable({
  providedIn: 'root',
})
export class TheatreService {
  constructor(private httpClient: HttpClient) {}

  onSubmit(event: any) {
    const {
      title,
      availableTickets,
      category,
      url,
      description,
      date,
      location,
      coverImage,
      simpleImage,
    } = event;

    console.log(
      title,
      availableTickets,
      category,
      url,
      description,
      date,
      location,
      coverImage,
      simpleImage
    );

    const formData = new FormData();
    formData.append('title', title);
    formData.append('availableTickets', availableTickets);
    formData.append('category', category);
    formData.append('url', url);
    formData.append('description', description);
    formData.append('date', date);
    formData.append('location', location);

    formData.append('files', coverImage as File, `cover_${coverImage.name}`);
    formData.append('files', simpleImage as File, `simple_${simpleImage.name}`);

    // let headers = new Headers();
    // /** No need to include Content-Type in Angular 4 */
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');
    // let options = new RequestOptions({ headers: headers });
    console.log(formData);
    return this.httpClient
      .post<any>(`${BACKEND_URL}/theatre`, formData, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          // inform the observers that the user's account information are now available
          // inform observers about account info availability
          // this.accountService.onUpdateAccount();
        })
      )
      .pipe(
        map((fileData) => {
          console.log(fileData);
          return fileData;
        })
      );
  }
}
