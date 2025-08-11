import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnChanges {
  @Input() items: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      console.log('Items changed:', changes['items']);
    }
  }
}
