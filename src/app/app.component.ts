import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Welcome to Angular';
  price = 340;
}
