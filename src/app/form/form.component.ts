import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  carName: string = '';
  onSubmit() {
    console.log('Form submitted:', this.carName);
    this.carName = ''; // Reset the form field after submission
  }
}
