import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FundListComponent } from "./fund-list.component";
import { FundDetailInfoComponent } from "./detail/info/fund-detail-info.component";
import { FundTabComponent } from "./detail/tab/fund-tab.component";
import { FundAnalysisComponent } from './detail/analysis/fund-analysis.component';

const routes: Routes = [
    { path: '', component: FundListComponent },
    {
        path: ':id', component: FundTabComponent, children: [
            { path: '', redirectTo: 'info', pathMatch: 'full' },
            { path: 'info', component: FundDetailInfoComponent },
            { path: 'analysis', component: FundAnalysisComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FundRoutingModule {

}