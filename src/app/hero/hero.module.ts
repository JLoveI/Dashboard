import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HeroRoutingModule } from "./hero-routing.module";
import { HeroService } from './services/hero.service';
import { HeroListComponent } from './hero-list.component';

@NgModule({
    imports:[CommonModule, HeroRoutingModule],
    declarations:[
        HeroListComponent
    ],
    providers:[HeroService],
    bootstrap:[
        HeroListComponent
    ]
})

export class HeroModule{
}