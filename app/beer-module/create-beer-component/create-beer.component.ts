import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { Beer } from './beer.model'

declare const module: any;

@Component({
    moduleId: module.id,
    selector: 'create-beer',
    templateUrl: 'create-beer.template.html',
    styleUrls: ['create-beer.style.css']
})
export class CreateBeerComponent {

    beerForm: FormGroup;

    beer: Beer = new Beer()

    constructor() {
        this.beerForm = new FormGroup({
            name: new FormControl('The name', [Validators.required, Validators.minLength(5)]),
            abv: new FormControl(1, [Validators.required, Validators.pattern('[0-9]+')])
        });
    }

}