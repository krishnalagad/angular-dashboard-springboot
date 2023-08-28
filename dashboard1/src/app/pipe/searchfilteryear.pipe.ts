import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilteryear',
})
export class SearchfilteryearPipe implements PipeTransform {
  transform(allData: any[], searchValueYear: number): any {
    if (!allData || searchValueYear === undefined) {
      return allData;
    }
    return allData.filter((data) => data['end_year'] === searchValueYear);
  }
}
