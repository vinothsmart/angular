import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  template: `<h1>Welcome to Angular!</h1>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
}
