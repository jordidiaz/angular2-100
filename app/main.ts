import { HttpModule } from '@angular/http';
import {Component} from "@angular/core";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { FormsModule } from '@angular/forms';

import { HelloPlainComponent } from './hello-plain-component/hello-plain';
import { BigTextOnClickDirective } from './big-text-on-click-directive/big-text-on-click';
import { DomPropertiesComponent } from './dom-properties-component/dom-properties.component';
import { EventsAndZonesComponent } from './events-and-zones-component/events-and-zones.component';
import { SortPipe } from './sort-pipe/sort-pipe';

import { BeerListComponent, BeerService } from './beer-list-component/index'; // Barrel

declare const module: any;

@Component({
    moduleId: module.id,
    selector:'pc-app',
    template: `<beer-list></beer-list>`, 
    styleUrls: ['common.style.css']
})
export class App {

    shout(greeting: any){
        alert(greeting);
    }

}

@NgModule({
    declarations: [
        App,
        HelloPlainComponent,
        BigTextOnClickDirective,
        DomPropertiesComponent,
        EventsAndZonesComponent,
        BeerListComponent,
        SortPipe],
    imports: [BrowserModule, FormsModule, HttpModule],
    bootstrap: [App],
    providers: [BeerService] // registrarlo en el injector
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);