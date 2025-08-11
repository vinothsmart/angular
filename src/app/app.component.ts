import { Component, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements DoCheck {
  title = 'Vinoth';
  prevTitle = 'Vinoth';

  ngDoCheck(): void {
    console.log('ngDoCheck hook executed');
    if (this.title !== this.prevTitle) {
      console.log('Title changed:', this.title);
      this.prevTitle = this.title;
    }
  }
}
