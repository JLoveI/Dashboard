import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: './invester-list.component.html',
    styleUrls: ['./invester-list.component.css']
})

export class InvesterListComponent {
    allChecked: boolean = false;
    checked: boolean = false;

    constructor(private router: Router) {
    }

    navToInvesterDetail(): void {
        this.router.navigate(['/invester', 1]);
    }
}