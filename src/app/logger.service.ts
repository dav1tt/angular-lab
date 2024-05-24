import { Injectable } from '@angular/core';
import { Logger } from './logger.interface';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger {
  constructor() { }

  log(...args: any): void {
    console.log(...args)
  }
}
