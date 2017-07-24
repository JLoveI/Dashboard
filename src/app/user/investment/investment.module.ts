import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { InvestmentRoutingModule } from "./investment-routing.module";
import { InvestmentListComponent } from "./investment-list.component";
import { InvestmentDetailTabComponent } from './detail/tab/investment-detail-tab.component'
import { FundListComponent } from "./detail/fund/fund-list.component";
import { EventComponent } from "./detail/event/event.component";


@NgModule({
    imports: [CommonModule,
        FormsModule,
        HttpModule,
        InvestmentRoutingModule
    ],
    declarations: [InvestmentListComponent,
        InvestmentDetailTabComponent,
        FundListComponent,
        EventComponent]
})

export class InvestmentModule {

}