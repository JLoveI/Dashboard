import { Component } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService } from './Services/hero.service';

@Component({
    templateUrl:'hero-list.component.html',
    selector:'hero-list',
})

export class HeroListComponent{
    selectedHero : Hero;
    private heroes: Hero[];
    constructor(public heroService : HeroService){
        
    }
}