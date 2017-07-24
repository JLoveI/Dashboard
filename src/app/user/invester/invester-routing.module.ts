import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FundListComponent } from "./fund/fund-list.component";
import { InvesterTabComponent } from './invester-tab.component'

const routes: Routes = [
    {
        path: '', component: InvesterTabComponent, children: [
            { path: "", component: FundListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InvesterRoutingModule {

}