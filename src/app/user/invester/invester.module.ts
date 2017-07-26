import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ChartModule } from 'angular-highcharts';

import { InvesterRoutingModule } from "./invester-routing.module";
import { FundListComponent } from "./fund/fund-list.component";
import { InvesterListComponent } from './name/invester-list.component';

import { InvesterTabComponent } from "./tab/invester-tab.component";
import { InvesterDetailTabComponent } from './name/tab/invester-detail-tab.component';
import { InvesterAnalysisTabComponent } from './name/analysis/tab/invester-analysis-tab.component';
import { InvesterAnalysisComponentChart } from './name/analysis/chart/invester-analysis-chart.component';
import { InvesterIvmComponent } from './name/analysis/investment/invester-ivm.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        InvesterRoutingModule,
        ChartModule
    ],
    declarations: [
        InvesterTabComponent,
        InvesterListComponent,
        FundListComponent,
        InvesterDetailTabComponent,
        InvesterAnalysisTabComponent,
        InvesterAnalysisComponentChart,
        InvesterIvmComponent
    ]
})

export class InvesterModule {

}