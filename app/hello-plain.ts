import { Component, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
    selector: 'hello-plain',
    template: `<input #office/>
               <button (click)="greet(office)">Greet</button>` 
               // recogemos la refencia al componente html con la variable #office
               // definimos un one way binding hacia el componente con ()
})
export class HelloPlainComponent {

    // Salida de nuestro componente (un EventEmitter)
    @Output()
    greetComposed: EventEmitter<string> = new EventEmitter<string>();

    greet(office: any) {
        // office es nuestro componente html
        // emitimos su valor para quien lo está esperando
        this.greetComposed.emit(`Hello from ${office.value}!`);
    }

}