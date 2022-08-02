import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, ...args: any[]): any {
    const sort=args[0];
    value.sort((a:any,b:any)=>{
     if(a[sort]<b[sort]){
       return -1;
     }
     else if(a[sort]>b[sort]){
       return 1;
     }
     else{
       return 0;
     }
    });
    return value;
  }

}
