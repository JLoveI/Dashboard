import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from './note-list.component';
import { NoteComponent } from './note.component'

const routes: Routes = [
    { path: '', component: NoteListComponent }
]

@NgModule({
    imports: [CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild(routes)
    ],
    declarations: [NoteListComponent, NoteComponent]
})

export class NoteModule {

}