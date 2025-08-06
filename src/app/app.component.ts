import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  user: any = null;

  ngOnInit() {
    this.user = {
      name: 'Vinoth Kanna',
      age: 35,
    };
  }
}
