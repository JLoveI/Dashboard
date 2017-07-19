import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';
import { Observable } from "rxjs/Observable";
import { Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Component({
    templateUrl:'hero-list.component.html',
    styleUrls:['hero-list.component.css']
})

export class HeroListComponent implements OnInit {

    selectedHero: Hero;
    heroes: Hero[];
    private searchTerms = new Subject<string>();
    constructor(private heroService : HeroService){
     this.getHeroes();
    }

    ngOnInit(): void {
       this.searchTerms
      .debounceTime(300)        
      .distinctUntilChanged()   
      .switchMap(term =>{
          console.log(1);
          return term 
        ? this.heroService.search(term)
        : Observable.of<Hero[]>([])})
        .toPromise()
     ;                      
    }

    search(term:string): void {
     console.log(term);
     this.searchTerms.next(term);
    }

    getHeroes():void {
        this.heroService.getHeroes().then(heroes=>this.heroes = heroes);
    }

    deleteHero(hero:Hero) : void {
        console.log(hero);
        this.heroService.delete(hero.id).then(()=>{
          this.heroes.filter(x=>x.id!==hero.id);
           this.selectedHero === hero && (this.selectedHero = null);
        });
    }

    selectHero(hero: Hero): void {
        this.selectedHero = hero;
    }

}