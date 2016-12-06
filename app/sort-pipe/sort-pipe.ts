import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {

    transform(array: any[], args: any): any {

        let sorted: any[] = array.sort();

        if (args && args.length && args === 'DESC') {
            sorted = sorted.reverse();
        }

        return sorted;
        
    }
}