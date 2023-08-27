import { Component, Input, OnInit } from '@angular/core';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss'],
})
export class TopWidgetsComponent implements OnInit {
  @Input() data: any = [];

  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  allData: any = [];
  objects: any = [];
  myMap = new Map<string, number>();
  mySet = new Set<string>();

  objects1: any = [];
  myMap1 = new Map<string, number>();
  mySet1 = new Set<string>();

  constructor(private _api: ApiServiceService) {}

  ngOnInit(): void {
    this._api.getAllData().subscribe({
      next: (data: any) => {
        this.allData = data;
        this.getNonNullCountry();
        this.getCountryCount();
        this.getNonNullCity();
        this.getCityCount();
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {},
    });
  }

  getNonNullCountry() {
    for (let item of this.allData) {
      if (!(item.country == 'null')) {
        this.objects.push(item);
      }
    }
  }

  getCountryCount() {
    let count = 0;
    for (let item of this.objects) {
      if (!this.mySet.add(item.country)) {
        count += 1;
      } else {
        count = 1;
      }
      this.myMap.set(item.country, count);
    }
  }

  getNonNullCity() {
    for (let item of this.allData) {
      if (!(item.city == 'null')) {
        this.objects1.push(item);
      }
    }
  }

  getCityCount() {
    let count = 0;
    for (let item of this.objects) {
      if (!this.mySet1.add(item.city)) {
        count += 1;
      } else {
        count = 1;
      }
      this.myMap1.set(item.city, count);
    }
  }

  getRegions() {
    let regions = new Set<string>();
    for (let obj of this.data) {
      if (obj.region == 'null' || obj.region == null) {
        continue;
      }
      regions.add(obj.city);
    }
    return regions;
  }

  // ----------------------------------------------------------model config-----------------------------------------------
  modalVisible = false;

  showModal() {
    this.modalVisible = true;
  }

  hideModal() {
    this.modalVisible = false;
  }
}
