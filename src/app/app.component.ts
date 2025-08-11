import { AfterContentInit, Component, DoCheck } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit hook executed');
  }
}
