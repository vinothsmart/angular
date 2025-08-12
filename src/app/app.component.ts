import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleMessageComponent } from './simple-message/simple-message.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, FormsModule, SimpleMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
