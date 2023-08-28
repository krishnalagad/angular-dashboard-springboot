import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-component-five',
  templateUrl: './component-five.component.html',
  styleUrls: ['./component-five.component.scss'],
})
export class ComponentFiveComponent implements OnInit {
  allData: any = [];
  tempDataArray: any = [];
  searchValue: string = '';
  searchValueTopic: string = '';
  searchValueCity: string = '';
  searchValueRegion: string = '';
  searchValueYear: number = 0;

  constructor(private _api: ApiServiceService) {}

  ngOnInit(): void {
    this._api.getAllDataForTable().subscribe({
      next: (data: any) => {
        this.allData = data;
        this.tempDataArray = [...this.allData];        
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {},
    });
  }

  // @ViewChild('intensityVar') intensityVar1: any = '';
  // @ViewChild('likelihoodVar') likelihoodVar1: any = '';
  // @ViewChild('relevenceVar') relevenceVar1: any = '';
  // @ViewChild('yearVar') yearVar1: any = '';
  // @ViewChild('countryVar') countryVar1: any = '';
  // @ViewChild('topicVar') topicVar1: any = '';
  // @ViewChild('cityVar') cityVar1: any = '';
  // @ViewChild('regionVar') regionVar1: any = '';

  // searchFilter() {
  //   this.tempDataArray = [];
  //   let filterObject: any = {
  //     intensity: this.intensityVar1.nativeElement.value,
  //     likelihood: this.likelihoodVar1.nativeElement.value,
  //     relevence: this.relevenceVar1.nativeElement.value,
  //     year: this.yearVar1.nativeElement.value,
  //     country: this.countryVar1.nativeElement.value,
  //     topic: this.topicVar1.nativeElement.value,
  //     city: this.cityVar1.nativeElement.value,
  //     region: this.regionVar1.nativeElement.value,
  //   };

  //   for (let i = 0; i < this.allData.length; i++) {
  //     let isStringExist = true;
  //     for (let key in filterObject) {
  //       console.log(key);
        
  //       if (key == 'topic') {
  //         isStringExist =
  //           this.allData[i][key].toString().indexOf(filterObject[key]) > -1;
  //       } else {
  //         isStringExist =
  //           this.allData[i][key]
  //             .toUpperCase()
  //             .indexOf(filterObject[key].toUpperCase()) > -1;
  //       }
  //       if (isStringExist == false) {
  //         break;
  //       }
  //     }
  //     if (isStringExist) {
  //       this.tempDataArray.push(this.allData[i]);
  //     }
  //   }

  //   // for (let i = 0; i < this.allData.length; i++) {
  //   //   let isMatch = true;

  //   //   for (let key in filterObject) {
  //   //     if (filterObject.hasOwnProperty(key)) {
  //   //       let propertyValue = this.allData[i][key];
  //   //       let filterValue = filterObject[key];

  //   //       if (typeof propertyValue === 'string') {
  //   //         isMatch =
  //   //           propertyValue.toUpperCase().indexOf(filterValue.toUpperCase()) >
  //   //           -1;
  //   //       } else if (typeof propertyValue === 'number') {
  //   //         isMatch = propertyValue === filterValue;
  //   //       } else if (key === 'topic') {
  //   //         isMatch = propertyValue.toString().indexOf(filterValue) > -1;
  //   //       } else {
  //   //         isMatch = false;
  //   //       }

  //   //       if (!isMatch) {
  //   //         break;
  //   //       }
  //   //     }
  //   //   }

  //   //   if (isMatch) {
  //   //     this.tempDataArray.push(this.allData[i]);
  //   //   }
  //   // }
  //   // console.log('Filtered Data:', this.tempDataArray);
  // }
}
