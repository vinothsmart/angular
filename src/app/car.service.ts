import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  private carNamesBehaviorSubject = new BehaviorSubject<string[]>([]);
  carNames$ = this.carNamesBehaviorSubject.asObservable();

  addCarName(carName: string) {
    const currentCarNames = this.carNamesBehaviorSubject.getValue();
    this.carNamesBehaviorSubject.next([...currentCarNames, carName]);
  }
}
