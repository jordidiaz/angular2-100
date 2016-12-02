import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import { HelloPlainComponent } from './hello-plain';

@Component({
    selector:'pc-app',
    template: `<hello-plain [office]="theOfficeToGreet"></hello-plain>` // [] define un one way binding hacia la plantilla
})
export class App {

    theOfficeToGreet: string;

    constructor() {
        this.theOfficeToGreet = 'Bilbao';
    }
}

@NgModule({
    declarations: [App, HelloPlainComponent],
    imports: [BrowserModule],
    bootstrap: [App]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);