import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SimpleMessageComponent } from './simple-message/simple-message.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, SimpleMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterContentInit {
  @ContentChildren(SimpleMessageComponent)
  messageComponents!: QueryList<SimpleMessageComponent>;
  ngAfterContentInit(): void {
    this.messageComponents.forEach((component) => {
      console.log(component);
    });
  }
}
