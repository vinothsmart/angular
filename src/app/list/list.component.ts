import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  // @Input() carList: string[] = [];
  carList: string[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.carNames$.subscribe((carNames) => {
      this.carList = carNames;
    });
  }
}
