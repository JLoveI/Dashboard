import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatformComponent } from "./platform.component";

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard', component: PlatformComponent,
        children: [
            { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' }
        ]
    },
    {
        path: 'fund', component: PlatformComponent,
        children: [
            { path: '', loadChildren: './fund/fund.module#FundModule' }
        ]
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class PlatformRoutingModule {

}