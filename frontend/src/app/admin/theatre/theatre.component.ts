import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TheatreService } from './theatre.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.scss'],
})
export class TheatreComponent implements OnInit {
  fileSelected = false;
  selectedFileName = '';
  selectedFile: File | null = null;
  uploadSubscription: Subscription;
  theatreForm: FormGroup;
  isOpen = false;
  isSubmitted = false;
  errorReturned = false;
  @ViewChild('simplePhoto') simplePhoto: ElementRef;
  @ViewChild('coverPhoto') coverPhoto: ElementRef;

  constructor(private theatreService: TheatreService) {}

  ngOnInit(): void {
    this.theatreForm = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required],
      }),
      category: new FormControl(null, {
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        validators: [Validators.required],
      }),
      url: new FormControl(null, {
        validators: [Validators.required],
      }),
      day: new FormControl(null, {
        validators: [Validators.required],
      }),
      month: new FormControl(null, {
        validators: [Validators.required],
      }),
      year: new FormControl(null, {
        validators: [Validators.required],
      }),
      location: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }

  submit(form: FormGroup) {}

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  onFileChange(event: any) {
    this.fileSelected = false;
    this.selectedFile = event.target.files[0] as File;
    this.selectedFileName = this.selectedFile?.name || '';
    this.fileSelected = true;

    this.uploadPicture(this.selectedFile, this.selectedFileName);
  }

  triggerSimplePhotoInput() {
    // Programmatically trigger the click event of the file input
    const fileInput = this.simplePhoto.nativeElement;
    fileInput.click();
  }

  triggerCoverPhotoInput() {
    // Programmatically trigger the click event of the file input
    const fileInput = this.coverPhoto.nativeElement;
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
