import { Component, NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { BrowserModule} from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from '@angular/forms';

import { DirectivesModule } from './directives-module/directives.module';
import { BeerModule } from './beer-module/beer.module';

declare const module: any;

@Component({
    moduleId: module.id,
    selector:'pc-app',
    template: `<beer-list></beer-list>`, 
    styleUrls: ['common.style.css']
})
export class App {}

@NgModule({
    declarations: [
        App
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DirectivesModule,
        BeerModule
    ],
    bootstrap: [App]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);