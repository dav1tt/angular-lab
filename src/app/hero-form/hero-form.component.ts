import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss'
})
export class HeroFormComponent {
  skills = ['Flying', 'FireBending', 'Telekinesis', 'Invisible', 'Mind Control']
  races = ['Human', 'Elf', 'Dwarf', 'Alien', 'Giant', 'Centaur']

  submitted = false;

  hero = new Hero('SMan', 'Invisible', 'F', 'Alien')

  onSubmit() {
    this.submitted = true
  }

  updateHero(){
    this.hero = new Hero('', '', '', '');
  }
}
