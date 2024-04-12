import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { HelloWorldPipe } from '../hello-world.pipe';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [HighlightDirective, CommonModule, HelloWorldPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {
  count = 8;
  isBiggerThanTen: boolean = false;
  names = ['giorgi', 'nika', 'elise']
  ob = {
    name: 'giorgi',
    lastname: 'doe'
  }
  now = new Date();

  ngOnInit(): void {
  }

  increment() {
    this.count++;
    this.isBiggerThanTen = this.count > 10
  }

  decrement() {
    this.count--;
    this.isBiggerThanTen = this.count > 10
  }

}
