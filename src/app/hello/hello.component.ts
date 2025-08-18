import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  imports: [FormsModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit, OnDestroy {
  counter = 0;
  private intervalId: any;

  //starts the timer
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.counter++;
    }, 1000);
    console.log('Timer started Invertal ID', this.intervalId);
  }

  // ends the timer
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    console.log('Timer stopped');
  }
}
