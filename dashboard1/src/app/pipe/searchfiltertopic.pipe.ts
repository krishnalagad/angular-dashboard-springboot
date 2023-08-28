import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfiltertopic',
})
export class SearchfiltertopicPipe implements PipeTransform {
  transform(allData: any[], searchValueTopic: string): any {
    if (!allData || !searchValueTopic) {
      return allData;
    }
    return allData.filter((data) =>
      data.topic
        .toLocaleLowerCase()
        .includes(searchValueTopic.toLocaleLowerCase())
    );
  }
}
