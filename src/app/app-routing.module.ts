import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';


const  routes: Routes = [
    { path: '', redirectTo:'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
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