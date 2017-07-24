import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { LibraryRoutingModule } from "./library-routing.module";
import { LibraryListComponent} from './library-list.component';


@NgModule({
    imports: [CommonModule,
        FormsModule,
        HttpModule,
        LibraryRoutingModule
    ],
    declarations: [LibraryListComponent]
})

export class LibraryModule {

}