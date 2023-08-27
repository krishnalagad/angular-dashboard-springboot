import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
})
export class ComponentOneComponent implements OnInit {
  @Input() data: any = [];

  endYears: any = [];
  intensities: any = [];
  relevances: any = [];
  likelihoods: any = [];

  constructor(private _api: ApiServiceService) {}

  ngOnInit(): void {
    this._api.getAllData().subscribe({
      next: (data: any) => {
        let i = 0;
        for (let item of data) {
          if (i == 25) {
            break;
          }
          this.endYears.push(item.end_year);
          this.intensities.push(item.impact);
          this.relevances.push(item.relevance);
          this.likelihoods.push(item.likelihood);
          i += 1;
        }
        this.createChart();
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {},
    });
  }

  createChart(): void {
    this.chart = new Chart({
      chart: {
        type: 'line',
        height: 280,
      },
      title: {
        text: 'Year wise Impact, Relevence and Likelihood',
      },
      xAxis: {
        categories: this.endYears,
      },
      yAxis: {
        title: {
          text: 'Range',
        },
      },
      series: [
        {
          name: 'Impact',
          type: 'line',
          color: '#044342',
          data: this.intensities,
        },
        {
          name: 'Relevences',
          type: 'line',
          color: '#7e0505',
          data: this.relevances,
        },
        {
          name: 'Likelihoods',
          type: 'line',
          color: '#ed9e20',
          data: this.likelihoods,
        },
      ],
      credits: {
        enabled: false,
      },
    });
  }
  // ----------------------------------------------------------------------------------------------------------------------------------

  chart = new Chart({
    chart: {
      type: 'line',
      height: 280,
    },
    title: {
      text: 'Component One',
    },
    xAxis: {
      categories: this.endYears,
    },
    yAxis: {
      title: {
        text: 'Year',
      },
    },
    series: [
      {
        name: 'Arizona',
        type: 'line',
        color: '#044342',
        data: this.intensities,
      },
      {
        name: 'Connecticut',
        type: 'line',
        color: '#7e0505',
        data: this.relevances,
      },
      {
        name: 'Ohio',
        type: 'line',
        color: '#ed9e20',
        data: this.likelihoods,
      },
    ],
    credits: {
      enabled: false,
    },
  });

  // ----------------------------------------------------------------------------------------------------------------------------------

  // extractYear() {
  //   let i = 0;
  //   let endYears = [];
  //   for (let item of this.data) {
  //     if (i == 20) {
  //       break;
  //     }
  //     endYears.push(item.end_year);
  //     i += 1;
  //   }
  //   return endYears;
  // }

  // extractIntensity() {
  //   let i = 0;
  //   let intensities = [];
  //   for (let item of this.data) {
  //     if (i == 20) {
  //       break;
  //     }
  //     intensities.push(item.intensity);
  //     i += 1;
  //   }
  //   return intensities;
  // }

  // extractRelevence() {
  //   let i = 0;
  //   let relevances = [];
  //   for (let item of this.data) {
  //     if (i == 20) {
  //       break;
  //     }

  //     relevances.push(item.relevance);
  //     i += 1;
  //   }
  //   return relevances;
  // }

  // extractLikelihood() {
  //   let i = 0;
  //   let likelihoods = [];
  //   for (let item of this.data) {
  //     if (i == 20) {
  //       break;
  //     }

  //     likelihoods.push(item.likelihood);
  //     i += 1;
  //   }
  //   return likelihoods;
  // }
}
