import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }


  getHeroes() {
    return ['Superman', 'Batman', 'Flash', 'Spider-man', 'Iron-Man', 'Hulk', 'Thor', 'Cpt. America', 'Ant-Man', 'Black Widow', 'Wonder Woman', 'Scarlet Witch', 'Dr. Strange']
  }
}
