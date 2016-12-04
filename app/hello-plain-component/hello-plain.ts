import { Component, Output, EventEmitter, ElementRef } from '@angular/core';

declare const module: any; 

@Component({
    moduleId: module.id, 
    selector: 'hello-plain',
    templateUrl: 'hello-plain.template.html',
    styleUrls: ['hello-plain.style.css']
})
export class HelloPlainComponent {

    @Output()
    greetComposed: EventEmitter<string> = new EventEmitter<string>();

    greet(office: any) {
        this.greetComposed.emit(`Hello from ${office.value}!`);
    }

}