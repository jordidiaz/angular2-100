import { Component, OnInit } from '@angular/core';

declare const module: any;

@Component({
    moduleId: module.id,
    selector: 'office-list',
    templateUrl: 'office-list.template.html'
})
export class OfficeListComponent implements OnInit { // OnInit

    public offices: string[];

    constructor() { }

    ngOnInit() {
        this.offices = [
            "Seattle",
            "London",
            "Dubai",
            "Madrid",
            "Bilbao",
            "Barcelona",
            "Sevilla",
            "León"
        ]
    }

}