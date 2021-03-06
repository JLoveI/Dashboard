import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LibraryListComponent } from './library-list.component';

const routes: Routes = [
    { path: '', component: LibraryListComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LibraryRoutingModule {

}