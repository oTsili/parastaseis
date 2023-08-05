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
  ngOnInit(): void {}
}
