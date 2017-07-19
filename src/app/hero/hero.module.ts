import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { HeroRoutingModule } from "./hero-routing.module";

import { InMemoryDataService } from "../in-memory-data.service";
import { InMemoryWebApiModule } from  'angular-in-memory-web-api';

import { LogService } from '../core/log.service';
import { HeroService } from './services/hero.service';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from "./hero-detail.component";

@NgModule({
    declarations:[
        HeroListComponent,
        HeroDetailComponent
    ], 
    imports:[CommonModule, 
             FormsModule,
             HttpModule,
             InMemoryWebApiModule.forRoot(InMemoryDataService),
             HeroRoutingModule             
             ],
    providers:[LogService, HeroService]
})

export class HeroModule{
}