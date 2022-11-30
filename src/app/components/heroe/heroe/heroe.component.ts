import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  
  heroe: any;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroService) {

    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    })
  }

  ngOnInit(): void {}

}
