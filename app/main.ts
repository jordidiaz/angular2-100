import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import { HelloPlainComponent } from './hello-plain'; // Nuestro componente.

@Component({
    selector:'pc-app',
    template: `<hello-plain></hello-plain>` // ¿y ese tag?
})
export class App { // Ahora se llama App.
}

@NgModule({
    declarations: [App, HelloPlainComponent], // Hay que registrar el componente en el módulo.
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);