import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent  } from "./dashboard.component";

@NgModule({
    imports:[CommonModule,
            FormsModule,
            HttpModule,
            DashboardRoutingModule
            ],
    declarations:[DashboardComponent],
    providers:[]
})

export class DashboardModule{

}