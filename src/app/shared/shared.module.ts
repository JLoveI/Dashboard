import { NgModule } from "@angular/core";
import { NavComponent } from "./nav.component";
import { UserProfileComponent } from "./user-profile.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports:[AppRoutingModule],
    declarations:[UserProfileComponent, NavComponent],
    exports:[AppRoutingModule, NavComponent, UserProfileComponent]
})

export class SharedModule{
}