import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BeerListComponent, CreateBeerComponent, BeerService } from './index';

import { PipesModule } from '../pipes-module/pipes.module';

@NgModule({
    imports: [CommonModule, PipesModule, ReactiveFormsModule],
    exports: [BeerListComponent],
    declarations: [BeerListComponent, CreateBeerComponent],
    providers: [BeerService],
})
export class BeerModule { }
