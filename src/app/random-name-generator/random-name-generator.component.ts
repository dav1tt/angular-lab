import { Component, EventEmitter, Input, Output } from '@angular/core';

const NAMES = [
  ['a', 'b', 'c', 'd'],
  ['ab', 'bc', 'cd', 'de'],
  ['abc', 'bcd', 'cde', 'def'],
  ['john', 'doee', 'mary', 'jane'],
  ['apple', 'banan', 'grape', 'melon'],
];

@Component({
  selector: 'app-random-name-generator',
  standalone: true,
  imports: [],
  templateUrl: './random-name-generator.component.html',
  styleUrl: './random-name-generator.component.scss',
})
export class RandomNameGeneratorComponent {
  @Input({ required: true }) nameLength!: number;
  @Output() nameGenerated = new EventEmitter<string>();

  public generateName(): void {
    const name = this.generateRandomName();
    this.nameGenerated.emit(name);
  }

  private generateRandomName(): string {
    const names = NAMES[this.nameLength - 1];
    const randomIndex = getRandomNumber(0, names.length - 1);
    return names[randomIndex];
  }
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
