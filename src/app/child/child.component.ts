import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnChanges {
  @Input() items: any[] = [];
  @Input() title: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      console.log('Items changed:', changes['items']);
    }
    if (changes['title']) {
      console.log('Title changed:', changes['title'].isFirstChange);
    }
  }
}
