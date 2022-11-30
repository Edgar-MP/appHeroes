import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Heroe, HeroService } from "../../services/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroService: HeroService, private _router: Router) {}

  ngOnInit(): void {
    this.heroes = this._heroService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(id: number) {
    this._router.navigate(['/heroe', id])
  }

}
