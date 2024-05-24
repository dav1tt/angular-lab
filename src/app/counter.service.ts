import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count = signal(0);

  constructor() { }

  getCount() {
    return this.count
  }

  setValue(newValue: number) {
    this.count.set(newValue)
  }

}
