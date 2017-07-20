import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { FundRoutingModule } from "./fund-routing.module";
import { FundListComponent  } from "./fund-list.component";
import { FundDetailInfoComponent } from "./detail/fund-detail-info.component";


@NgModule({
    imports:[CommonModule,
            FormsModule,
            HttpModule,
            FundRoutingModule
            ],
    declarations:[FundListComponent, FundDetailInfoComponent]
})

export class FundModule{

}