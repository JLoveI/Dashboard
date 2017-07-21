import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found.component';

const routes: Routes = [
    { path: 'login', loadChildren: './user/login/login.module#LoginModule' },
    { path: '', loadChildren: './user/platform.module#PlatformModule'},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}