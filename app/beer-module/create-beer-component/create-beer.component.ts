import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { Beer } from './beer.model'

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

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

    constructor(fb: FormBuilder) {
        
        this.beerForm = fb.group({
            name: ['The name', [Validators.required, Validators.minLength(5)]],
            abv: [1, [Validators.required, Validators.pattern('[0-9]+')]]
        });

        this.beerForm.valueChanges
            .filter(() => this.beerForm.valid)
            .map(value => {
                const beer = new Beer();
                beer.name = value.name;
                beer.abv = value.abv;
            })
            .do((formValue: any) => console.log("Form value: ", formValue))
            .subscribe(
                beer => {
                    console.log("Autosave!");
                }
            )

    }

    partialUpdate() {
        this.beerForm.patchValue({
            name: 'Heineken'
        })
    }

    fullUpdate() {
        this.beerForm.setValue({
            name: 'Heineken',
            abv: 5
        })
    }

}