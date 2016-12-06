import { Component } from '@angular/core';

declare const module: any;

@Component({
    moduleId: module.id,
    selector: 'dom-properties',
    templateUrl: 'dom-properties.template.html',
    styleUrls: ['dom-properties.style.css']
})
export class DomPropertiesComponent {

    message: string;
    messageBinding: string;

    onKeyUp(input: any) {
        this.message = input.value;
    }

}