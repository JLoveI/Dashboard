import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InvestmentListComponent } from "./investment-list.component";
import { InvestmentDetailTabComponent } from './detail/tab/investment-detail-tab.component'
import { FundListComponent } from "./detail/fund/fund-list.component";
import { EventComponent } from "./detail/event/event.component";


const routes: Routes = [
    { path: '', component: InvestmentListComponent },
    {
        path: ':id', component: InvestmentDetailTabComponent, children: [
            { path: '', redirectTo: 'fund', pathMatch: 'full' },
            { path: "fund", component: FundListComponent },
            { path: "event", component: EventComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InvestmentRoutingModule {

}