import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss'],
})
export class ComponentTwoComponent implements OnInit {
  @Input() data: any = [];
  objects: any = [];
  myMap = new Map<string, number>();
  mySet = new Set<string>();

  countryOccurrences: { [country: string]: number } = {};

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 280,
    },
    title: {
      text: 'Category wise sales',
    },
    xAxis: {
      categories: [
        'Electronics',
        'Groceries',
        'Cosmetics',
        'Clothes',
        'Appliances',
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue in %',
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'Electronics',
            y: 41.0,
            color: '#044342',
          },
          {
            name: 'Groceries',
            y: 33.8,
            color: '#7e0505',
          },
          {
            name: 'Cosmetics',
            y: 6.5,
            color: '#ed9e20',
          },
          {
            name: 'Clothes',
            y: 15.2,
            color: '#6920fb',
          },
          {
            name: 'Appliances',
            y: 3.5,
            color: '#121212',
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  });

  allData: any = [];

  pieData: any = {};
  

  constructor(private _api: ApiServiceService) {}

  ngOnInit(): void {
    this._api.getDataForPie().subscribe({
      next: (data: any) => {
        this.pieData = data;
        console.log(this.pieData);
        this.createChart();
      },
      error: (err: any) => {},
      complete: () => {},
    });

    this._api.getAllData().subscribe({
      next: (data: any) => {
        this.allData = data;
        this.getNonNullCountry();
        this.getCountryCount();
        this.countOccurrences();
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {},
    });
  }

  createChart(): void{
    this.chart = new Chart({
      chart: {
        type: 'pie',
        height: 280,
      },
      title: {
        text: 'Country and Its Occurance',
      },
      plotOptions: {
        pie: {
          size: '70%', // Adjust the size as needed (percentage or pixels)
        },
      },
      xAxis: {
        categories: this.pieData.list,
      },
      yAxis: {
        title: {
          text: 'Revenue in %',
        },
      },
      series: [
        {
          type: 'pie',
          data: this.pieData.data,
        },
      ],
      credits: {
        enabled: false,
      },
    });
  }

  countOccurrences(): void {
    this.objects.forEach((item: any) => {
      if (this.countryOccurrences[item.country]) {
        this.countryOccurrences[item.country]++;
      } else {
        this.countryOccurrences[item.country] = 1;
      }
    });
    // console.log(this.countryOccurrences);
    // console.log(this.mySet);
    // console.log(this.myMap);
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
}
