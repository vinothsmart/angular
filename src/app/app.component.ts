import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ChildComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  itemList = [
    {
      id: 1,
      name: 'Apple',
    },
    {
      id: 2,
      name: 'Banana',
    },
    {
      id: 3,
      name: 'Cherry',
    },
    {
      id: 4,
      name: 'Date',
    },
    {
      id: 5,
      name: 'Elderberry',
    },
  ];
}
