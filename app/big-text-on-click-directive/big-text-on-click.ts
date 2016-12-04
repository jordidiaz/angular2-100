import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[big-text-on-click]',
})
export class BigTextOnClickDirective {

    bigText: boolean = false; // flag

    @HostBinding('class.supersize') // maneja los bindings del host
    get supersize(){
        return this.bigText;
    }

    @HostListener('click') // maneja los listeners de host
    toggleBigText() {
        this.bigText = !this.bigText
    }

}