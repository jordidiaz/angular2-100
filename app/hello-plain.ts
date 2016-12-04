import { Component, Output, EventEmitter, ElementRef } from '@angular/core';

declare const module: any; // Para que el linter no se queje.

@Component({
    moduleId: module.id, // The module id of the module that contains the component.
                         // Needed to be able to resolve relative urls for templates and styles.
    selector: 'hello-plain',
    templateUrl: 'hello-plain.template.html' // template vs templateUrl.
})
export class HelloPlainComponent {

    @Output()
    greetComposed: EventEmitter<string> = new EventEmitter<string>();

    greet(office: any) {
        this.greetComposed.emit(`Hello from ${office.value}!`);
    }

}