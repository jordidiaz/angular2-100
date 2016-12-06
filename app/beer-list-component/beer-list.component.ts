import { Component, OnInit } from '@angular/core';

import { BeerService } from './beer.service';

declare const module: any;

@Component({
    moduleId: module.id,
    selector: 'beer-list',
    templateUrl: 'beer-list.template.html'
})
export class BeerListComponent implements OnInit { // OnInit

    public beers: any[];

    private beerService: BeerService; 

    constructor(beerService: BeerService) { // injectarlo
        this.beerService = beerService;
    }

    /*constructor(private beerService: BeerService) {}*/ //short syntax

    ngOnInit() {
        this.beerService.getBeers().subscribe(
            beers => {
                this.beers = beers;
            }
        )
    }

}