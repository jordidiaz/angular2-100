import { Component, NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { BrowserModule} from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from '@angular/forms';

import { BigTextOnClickDirective } from './big-text-on-click-directive/index';
import { AlcoholPipe } from './alcohol-pipe/index';
import { BeerListComponent, BeerService } from './beer-list-component/index';

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
        BigTextOnClickDirective,
        BeerListComponent,
        AlcoholPipe],
    imports: [BrowserModule, FormsModule, HttpModule],
    bootstrap: [App],
    providers: [BeerService]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);