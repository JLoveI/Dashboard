import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ChartModule } from "angular-highcharts";

import { FundRoutingModule } from "./fund-routing.module";
import { FundListComponent } from "./fund-list.component";
import { FundDetailInfoComponent } from "./detail/info/fund-detail-info.component";
import { FundTabComponent } from './detail/tab/fund-tab.component';
import { FundAnalysisComponent } from './detail/analysis/fund-analysis.component';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        HttpModule,
        FundRoutingModule,
        ChartModule
    ],
    declarations: [FundListComponent, FundTabComponent, FundDetailInfoComponent, FundAnalysisComponent]
})

export class FundModule {

}