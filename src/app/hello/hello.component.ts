import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements AfterViewInit {
  // focus on the input field
  @ViewChild('nameInput') nameInput!: ElementRef;

  ngAfterViewInit() {
    this.nameInput.nativeElement.focus();
    console.log('Input focused');
  }
}
