// 1- Componente raíz de la app.
import {Component} from "@angular/core";
@Component({
    selector:'pc-app', // En que etiqueta de nuestro html bootstrapeará la app.
    template: `<h1>Hello Plain!</h1>` // Plantilla inline.
})
export class HelloPlain {
}

// 2- Módulo raíz: TLDR Los módulos de Angular agrupan funcionalidad .
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
@NgModule({
    declarations: [HelloPlain], // Componentes (directivas y pipes) que contiene este módulo.
    imports: [BrowserModule], // Módulo que contiene las directivas básicas de Angular (ngIf, ngFor).
    bootstrap: [HelloPlain] // Que componente bootstrapeará este módulo. (Sólo se usa en el módulo raíz).
})
export class AppModule {

}

// 3- Bootstrap!
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
platformBrowserDynamic().bootstrapModule(AppModule);