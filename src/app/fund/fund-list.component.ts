import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: './fund-list.component.html',
    styleUrls: ['./fund-list.component.css']
})

export class FundListComponent {
    allChecked: boolean = false;
    checked: boolean = false;

    constructor(private router: Router) {
    }

    navToFundDetail(): void {
        this.router.navigate(['/fund', 1]);
    }
}