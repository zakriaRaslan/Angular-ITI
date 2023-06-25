import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEgp'
})
export class UsdToEgpPipe implements PipeTransform {

  transform(value: number, rate:number=30.77): number {
    return value * rate;
  }

}
