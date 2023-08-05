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
  isSimplePhotoSelected = false;
  isCoverPhotoSelected = false;
  selectedSimpleImageName = '';
  selectedCoverImageName = '';
  selectedSimplePhoto: File | null = null;
  selectedCoverPhoto: File | null = null;
  uploadSubscription: Subscription;
  theatreForm: FormGroup;
  isOpen = false;
  isSubmitted = false;
  errorReturned = false;
  submitSubscription: Subscription;
  @ViewChild('simplePhoto') simplePhoto: ElementRef;
  @ViewChild('coverPhoto') coverPhoto: ElementRef;
  @ViewChild('month') month: ElementRef;
  @ViewChild('description') description: ElementRef;

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

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  onSimplePhotoChange(event: any) {
    this.isSimplePhotoSelected = false;
    this.selectedSimplePhoto = event.target.files[0] as File;
    this.selectedSimpleImageName = this.selectedSimplePhoto.name;
    this.isSimplePhotoSelected = true;

    // this.uploadPicture(this.selectedFile, this.selectedFileName);
  }

  onCoverPhotoChange(event: any) {
    this.isCoverPhotoSelected = false;
    this.selectedCoverPhoto = event.target.files[0] as File;
    this.selectedCoverImageName = this.selectedCoverPhoto.name;
    this.isCoverPhotoSelected = true;

    // this.uploadPicture(this.selectedFile, this.selectedFileName);
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

  // uploadPicture(selectedFile: any) {
  //   if (selectedFile) {
  //     this.uploadSubscription = this.theatreService
  //       .onUploadPicture(selectedFile)
  //       .subscribe({
  //         next: (response) => {
  //           console.log({ response });
  //         },
  //       });
  //   }
  // }

  submit(form: FormGroup) {
    this.isSubmitted = true;

    if (form.invalid) {
      console.log('form is invalid!');
      return;
    }

    let concert;
    if (this.selectedCoverPhoto && this.selectedSimplePhoto) {
      concert = {
        title: form.value.title,
        category: form.value.category,
        description: this.description.nativeElement.value,
        url: form.value.url,
        date: `${form.value.day}/${this.month.nativeElement.value}/${form.value.year}`,
        location: form.value.location,
        simpleImage: this.selectedSimplePhoto,
        coverImage: this.selectedCoverPhoto,
      };
    }

    this.submitSubscription = this.theatreService.onSubmit(concert).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        let errorMessage = error.error.message;
        console.error(errorMessage);
      },
    });
  }
}
