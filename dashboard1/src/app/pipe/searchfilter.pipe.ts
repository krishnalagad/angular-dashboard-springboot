import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(allData: any[], searchValue: string): any {
    if (!allData || !searchValue) {
      return allData;
    }
    return allData.filter((data) =>
      data.country.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
}
