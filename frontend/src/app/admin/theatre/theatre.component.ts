import { Component, ElementRef, ViewChild } from '@angular/core';
import { TheatreService } from './theatre.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.scss'],
})
export class TheatreComponent {
  fileSelected = false;
  selectedFileName = '';
  selectedFile: File | null = null;
  uploadSubscription: Subscription;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private theatreService: TheatreService) {}

  onFileChange(event: any) {
    this.fileSelected = false;
    this.selectedFile = event.target.files[0] as File;
    this.selectedFileName = this.selectedFile?.name || '';
    this.fileSelected = true;

    this.uploadPicture(this.selectedFile, this.selectedFileName);
  }

  triggerFileInput() {
    // Programmatically trigger the click event of the file input
    const fileInput = this.fileInput.nativeElement;
    fileInput.click();
  }

  uploadPicture(selectedFile: any, selectedFileName: string) {
    if (selectedFile) {
      this.uploadSubscription = this.theatreService
        .onUploadPicture(selectedFile, selectedFileName)
        .subscribe({
          next: (response) => {
            console.log({ response });
          },
        });
    }
  }
}
