import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent  } from "./hero-detail.component";

const routes : Routes = [
    {path: '' , component: HeroListComponent},
    {path: ':id', component: HeroDetailComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class HeroRoutingModule{
}