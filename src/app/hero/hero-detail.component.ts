import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { HeroService } from "./services/hero.service";
import "rxjs/add/operator/switchMap";
import { Hero } from "./models/Hero";

@Component({
    templateUrl:'./hero-detail.component.html',
    styles:[`label {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer; cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc; 
  cursor: auto;
}
`]
})

export class HeroDetailComponent implements OnInit{
   private hero:Hero;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private heroService: HeroService) {
    }

    ngOnInit(): void {
       this.route.paramMap
                 .switchMap((params: ParamMap) =>{
                   console.log(this.heroService.get(+params.get('id')));
                   return this.heroService.get(+params.get('id'))
                 })
                 .subscribe((result)=>this.hero = result);
    }

    goBack():void{
        this.location.back();
    }

    save():void{
        this.heroService.update(this.hero)
                        .then(()=>this.goBack());
    }

    keyup(event: KeyboardEvent):void{
      event.keyCode == 13 && this.save();
      event.keyCode == 27 && this.goBack();
    }
}