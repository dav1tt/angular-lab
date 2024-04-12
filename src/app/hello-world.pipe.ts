import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'helloWorld',
  standalone: true
})
export class HelloWorldPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `${value} World!`;
  }

}
