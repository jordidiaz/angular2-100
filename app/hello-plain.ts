import { Component, Input } from '@angular/core';

@Component({
    selector: 'hello-plain',
    template: '<h1>Hello Plain Concepts {{text}}!</h1>'
})
export class HelloPlainComponent {

    // Definimos un dato de entrada de nuestro componente
    @Input('office') // El 'input' se llama 'office'
    text: string; // Para el componente internamente es 'text'

}