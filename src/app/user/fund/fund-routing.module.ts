import { NgModule } from "@angular/core";
import { Routes, RouterModule  } from "@angular/router";

import { FundListComponent } from "./fund-list.component";
import { FundDetailInfoComponent } from "./detail/fund-detail-info.component";


const routes:Routes = [
    { path: '', component: FundListComponent },
    { path: ':id', component: FundDetailInfoComponent }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class FundRoutingModule{

}