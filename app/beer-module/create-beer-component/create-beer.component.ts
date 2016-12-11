import { Component } from '@angular/core';

import { Beer } from './beer.model'

declare const module: any;

@Component({
    moduleId: module.id,
    selector: 'create-beer',
    templateUrl: 'create-beer.template.html'
})
export class CreateBeerComponent {

    beer: Beer = new Beer()

}