import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { InvesterRoutingModule } from "./invester-routing.module";
import { FundListComponent } from "./fund/fund-list.component";
import { InvesterTabComponent } from "./invester-tab.component";


@NgModule({
    imports: [CommonModule,
        FormsModule,
        HttpModule,
        InvesterRoutingModule
    ],
    declarations: [InvesterTabComponent, FundListComponent]
})

export class InvesterModule {

}