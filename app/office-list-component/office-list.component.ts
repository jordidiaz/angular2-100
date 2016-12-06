import { Component, OnInit } from '@angular/core';

import { OfficeService } from './office.service';

declare const module: any;

@Component({
    moduleId: module.id,
    selector: 'office-list',
    templateUrl: 'office-list.template.html'
})
export class OfficeListComponent implements OnInit { // OnInit

    public offices: string[];

    private officeService: OfficeService; 

    constructor(officeService: OfficeService) { // injectarlo
        this.officeService = officeService;
    }

    /*constructor(private officeService: OfficeService) {}*/ //short syntax

    ngOnInit() {
        this.offices = this.officeService.getOffices();
    }

}