import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundListComponent } from './fund/fund-list.component';
import { InvesterListComponent } from './name/invester-list.component';
import { InvesterTabComponent } from './tab/invester-tab.component';
import { InvesterAnalysisTabComponent } from './name/analysis/tab/invester-analysis-tab.component';
import { InvesterAnalysisComponentChart } from './name/analysis/chart/invester-analysis-chart.component';
import { InvesterIvmComponent } from './name/analysis/investment/invester-ivm.component';

import { InvesterDetailTabComponent } from './name/tab/invester-detail-tab.component';
const routes: Routes = [
    {
        path: '', component: InvesterTabComponent, children: [
            { path: "", redirectTo: "name", pathMatch: "full" },
            { path: "name", component: InvesterListComponent },
            { path: "fund", component: FundListComponent }
        ]
    },
    {
        path: ":id", component: InvesterDetailTabComponent, children: [
            { path: "", redirectTo: "analysis", pathMatch: "full" },
            {
                path: "analysis", component: InvesterAnalysisTabComponent, children: [
                    { path: "", redirectTo: "chart", pathMatch: "full" },
                    { path: "preview", component: InvesterIvmComponent },
                    { path: "chart", component: InvesterAnalysisComponentChart }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class InvesterRoutingModule {

}