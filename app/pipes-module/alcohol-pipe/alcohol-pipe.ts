import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'alcohol'
})

export class AlcoholPipe implements PipeTransform {

    transform(value: string): any {

        return `{value}% alc/vol`
        
    }
}