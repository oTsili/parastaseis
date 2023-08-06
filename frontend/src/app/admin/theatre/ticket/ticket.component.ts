import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Event } from 'src/app/user/interfaces/event.interface';
import { TheatrePageService } from 'src/app/user/theatre-page/theatre-page.service';
import { TheatreService } from '../theatre.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit, OnDestroy {
  ticketForm: FormGroup;
  isSubmitted = false;
  errorReturned = false;
  eventsSubscription: Subscription;
  submitSubscription: Subscription;
  events: Event[];
  @ViewChild('month') month: ElementRef;
  @ViewChild('socialType') socialType: ElementRef;
  @ViewChild('event') event: ElementRef;

  constructor(
    private theatrePageService: TheatrePageService,
    private theatreService: TheatreService
  ) {}

  ngOnInit(): void {
    this.ticketForm = new FormGroup({
      time: new FormControl(null, {
        validators: [Validators.required],
      }),

      price: new FormControl(null, {
        validators: [Validators.required],
      }),
      seats: new FormControl(null, {
        validators: [Validators.required],
      }),
      day: new FormControl(null, {
        validators: [Validators.required],
      }),
      year: new FormControl(null, {
        validators: [Validators.required],
      }),
    });

    this.eventsSubscription = this.theatrePageService.onGetEvents().subscribe({
      next: (response) => {
        this.events = response.events;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }

  resetForm() {
    this.event.nativeElement.value = '';
    this.socialType.nativeElement.value = '';
    this.month.nativeElement.value = '';
  }

  submit(form: FormGroup) {
    this.isSubmitted = true;

    console.log(form);
    if (form.invalid) {
      console.log('form is invalid!');
      return;
    }

    let ticket = {
      time: form.value.time,
      price: form.value.price,
      seats: form.value.seats,
      date: `${form.value.day}/${this.month.nativeElement.value}/${form.value.year}`,
      socialType: this.socialType.nativeElement.value,
      event: this.event.nativeElement.value,
    };

    this.submitSubscription = this.theatreService
      .onSubmitTicket(ticket)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.ticketForm.reset();
          this.resetForm();
          this.isSubmitted = false;
        },
        error: (error) => {
          let errorMessage = error.error.message;
          console.error(errorMessage);
        },
      });
  }
}
