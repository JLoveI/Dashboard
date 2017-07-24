import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: './investment-list.component.html',
    styleUrls: ['./investment-list.component.css']
})

export class InvestmentListComponent {
    allChecked: boolean = false;
    checked: boolean = false;

    constructor(private router: Router) {
    }

    navToInvestmentDetail(): void {
        this.router.navigate(['/investment', 1]);
    }
}