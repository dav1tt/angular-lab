import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal, ViewEncapsulation } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { HelloWorldPipe } from '../hello-world.pipe';
import { MatButtonModule } from '@angular/material/button';
import { LoggerService } from '../logger.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [HighlightDirective, CommonModule, HelloWorldPipe, MatButtonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit {
  count!: Signal<number>
  isBiggerThanTen: boolean = false;

  constructor(
    private loggerService: LoggerService,
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.count = this.counterService.getCount()
  }

  increment() {
    this.counterService.setValue(this.count() + 1)
    this.isBiggerThanTen = this.count() > 10
    this.loggerService.log("LOG: Increment", this.count())
  }

  decrement() {
    this.counterService.setValue(this.count() - 1)
    this.isBiggerThanTen = this.count() > 10
    this.loggerService.log("LOG: Decrement", this.count())
  }

}
