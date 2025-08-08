import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  carName: string = '';
  // @Output() carAdded = new EventEmitter<string>();

  constructor(private carService: CarService) {}

  onSubmit() {
    // this.carAdded.emit(this.carName);
    // sending the value using Car Service
    this.carService.addCarName(this.carName);
    this.carName = ''; // Reset the form field after submission
  }
}
