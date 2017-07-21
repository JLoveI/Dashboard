import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from "./login.component";

const routes:Routes = [
    {path:'' , component:LoginComponent}
]

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild(routes)
    ],
    bootstrap: [LoginComponent]
})

export class LoginModule { 
   
}
