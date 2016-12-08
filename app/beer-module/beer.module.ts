import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BeerListComponent, BeerService } from './index';

import { PipesModule } from '../pipes-module/pipes.module';

@NgModule({
    imports: [CommonModule, PipesModule],
    exports: [BeerListComponent],
    declarations: [BeerListComponent],
    providers: [BeerService],
})
export class BeerModule { }
