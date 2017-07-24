import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})

export class EventComponent {
  
    constructor(private router: Router) {
    }

}