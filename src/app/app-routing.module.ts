import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

const  routes: Routes = [
    { path: '', redirectTo:'hero'  },
    { path: 'hero', loadChildren: './hero/hero.module#HeroModule' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ]
})

export class AppRoutingModule{

}