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

  onUploadPicture(selectedFile: any, selectedFileName: string) {
    console.log(selectedFile);
    console.log(selectedFileName);
    const formData = new FormData();
    formData.append('file', selectedFile as File, selectedFileName);
    // formData.append('file', selectedFile, selectedFileName);
    // let headers = new Headers();
    // /** No need to include Content-Type in Angular 4 */
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');
    // let options = new RequestOptions({ headers: headers });
    console.log(formData);
    return this.httpClient
      .post<any>(`${BACKEND_URL}/file/upload`, formData, {
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
