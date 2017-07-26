import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list.component';

const routes: Routes = [
    { path: '', component: EventListComponent }
]

@NgModule({
    imports: [CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild(routes)
    ],
    declarations: [EventListComponent]
})

export class EventModule {

}