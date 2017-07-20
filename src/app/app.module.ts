import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component';
import { LogService } from './core/log.service';

import { HeroService } from './hero/services/hero.service';
import { HeroListComponent  } from "./hero/hero-list.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers:[LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
