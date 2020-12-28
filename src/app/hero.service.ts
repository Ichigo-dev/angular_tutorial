import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mockheroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }
}
