import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostRecentFirst'
})
export class MostRecentFirstPipe implements PipeTransform {

  private compare(a, b) {
      if (a.createdOn > b.createdOn) return -1;
      else return 1;
  }

  transform(reviews: any[]): any[] {
    if (reviews && reviews.length > 0) return reviews.sort(this.compare);
  }

}
