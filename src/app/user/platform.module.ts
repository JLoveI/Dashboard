import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { PlatformRoutingModule } from "./platform-routing.module";

import { PlatformComponent } from './platform.component';
import { LogService } from '../core/log.service';

import { NavComponent } from "../shared/nav.component";
import { UserProfileComponent } from "../shared/user-profile.component";
@NgModule({
  declarations: [
    PlatformComponent,
    NavComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    PlatformRoutingModule,
  ],
  providers:[LogService],
  bootstrap: [PlatformComponent]
})
export class PlatformModule { 
  
}
