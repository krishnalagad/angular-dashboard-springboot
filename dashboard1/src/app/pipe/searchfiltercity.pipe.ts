import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfiltercity',
})
export class SearchfiltercityPipe implements PipeTransform {
  transform(allData: any[], searchValueCity: string): any {
    if (!allData || !searchValueCity) {
      return allData;
    }
    return allData.filter((data) =>
      data.city
        .toLocaleLowerCase()
        .includes(searchValueCity.toLocaleLowerCase())
    );
  }
}
