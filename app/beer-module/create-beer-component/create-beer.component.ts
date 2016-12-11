import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

import { Beer } from './beer.model'

declare const module: any;

@Component({
    moduleId: module.id,
    selector: 'create-beer',
    templateUrl: 'create-beer.template.html'
})
export class CreateBeerComponent {

    beerForm: FormGroup;

    beer: Beer = new Beer()

    constructor() {
        this.beerForm = new FormGroup({
            name: new FormControl(),
            abv: new FormControl()
        });
    }

}