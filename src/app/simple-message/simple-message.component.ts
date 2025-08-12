import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-simple-message',
  imports: [],
  templateUrl: './simple-message.component.html',
  styleUrl: './simple-message.component.css',
})
export class SimpleMessageComponent implements AfterContentInit {
  @ContentChildren('messageContent') messageElements!: QueryList<ElementRef>;

  ngAfterContentInit() {
    this.messageElements.forEach((element) => {
      console.log('Projec content', element.nativeElement.textContent);
    });
  }
}
