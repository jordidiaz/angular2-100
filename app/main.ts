import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import { HelloPlainComponent } from './hello-plain';

@Component({
    selector:'pc-app',
    template: `<hello-plain (greetComposed)="shout($event)"></hello-plain>`
})
export class App {

    shout(greeting: any){
        alert(greeting);
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