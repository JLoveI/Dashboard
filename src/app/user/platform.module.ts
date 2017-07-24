import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { PlatformRoutingModule } from "./platform-routing.module";

import { LogService } from '../core/log.service';

import { NavComponent } from "../shared/nav.component";
import { UserProfileComponent } from "../shared/user-profile.component";
import { PlatformComponent } from './platform.component';

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
