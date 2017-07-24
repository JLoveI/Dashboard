import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: './fund-list.component.html',
    styleUrls: ['./fund-list.component.css']
})

export class FundListComponent {
    constructor(private router: Router) {
        
    }
}