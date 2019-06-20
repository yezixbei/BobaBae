import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(distance: number): String {
    const isNumeric = function (n) { return !isNaN(parseFloat(n)) && isFinite(n); };
    
    if (distance && isNumeric(distance)) {
      let thisDistance = Math.floor(distance).toString();
      let unit = 'm';
      if (distance > 1000) {
        thisDistance = (distance / 1000).toFixed(1);
        unit = 'km';
      } 
      return thisDistance+unit;

    } else {
      return '?';
    }
  }
}
