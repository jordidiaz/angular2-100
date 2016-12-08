import { Component, NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { BrowserModule} from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from '@angular/forms';

import { AlcoholPipe } from './pipes-module/alcohol-pipe/index';
import { BeerListComponent, BeerService } from './beer-module/beer-list-component/index';

import { DirectivesModule } from './directives-module/directives.module';

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
        App,
        BeerListComponent,
        AlcoholPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DirectivesModule
    ],
    bootstrap: [App],
    providers: [BeerService]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);