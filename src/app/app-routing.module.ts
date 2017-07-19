import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { HeroListComponent  } from './hero/hero-list.component';


const  routes: Routes = [
    { path: '', redirectTo:'heroes',pathMatch:'full' },
    // { path: 'heroes', component: HeroListComponent },
    { path: 'heroes', loadChildren: './hero/hero.module#HeroModule' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations:[PageNotFoundComponent],
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}