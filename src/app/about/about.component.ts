import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id!: string | null;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
