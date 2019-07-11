import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subcateroies'
})
export class SubcateroiesPipe implements PipeTransform {

  transform(value: any, mid: string, sid: string): any {
    const arr = [];
    for(const item of value) {

      if(item.catergoryName === mid && item.name===sid) {
        arr.push(item)
      }

    }
    return arr;
  }

}
