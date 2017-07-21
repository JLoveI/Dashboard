import { NgModule } from "@angular/core";
import { NavComponent } from "./nav.component";
import { UserProfileComponent } from "./user-profile.component";

@NgModule({
    imports: [],
    declarations: [UserProfileComponent, NavComponent],
    exports: [NavComponent, UserProfileComponent]
})

export class SharedModule {
}