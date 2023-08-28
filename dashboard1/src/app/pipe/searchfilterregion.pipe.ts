import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilterregion',
})
export class SearchfilterregionPipe implements PipeTransform {
  transform(allData: any[], searchValueRegion: string): any {
    if (!allData || !searchValueRegion) {
      return allData;
    }
    return allData.filter((data) =>
      data.region
        .toLocaleLowerCase()
        .includes(searchValueRegion.toLocaleLowerCase())
    );
  }
}
