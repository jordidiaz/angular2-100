import { NgModule } from '@angular/core';

import { BigTextOnClickDirective }   from './index';

@NgModule({
    exports: [BigTextOnClickDirective], // aqui las que exponemos
    declarations: [BigTextOnClickDirective] // aqui podemos tener muuuuchas
})
export class DirectivesModule { }
