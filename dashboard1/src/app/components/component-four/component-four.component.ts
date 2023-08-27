import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-component-four',
  templateUrl: './component-four.component.html',
  styleUrls: ['./component-four.component.scss'],
})
export class ComponentFourComponent implements OnInit {
  @Input() data: any = [];

  allData: any;

  constructor(private _api: ApiServiceService) {}
  ngOnInit(): void {
    this._api.getDataForBar().subscribe({
      next: (data: any) => {
        this.allData = data;
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
        type: 'bar',
        height: 180,
      },
      title: {
        text: 'Top 5 Countries by their intensity',
      },
      xAxis: {
        categories: this.allData.list,
      },
      yAxis: {
        title: {
          text: '',
        },
      },
      series: [
        {
          type: 'bar',
          showInLegend: false,
          data: this.allData.data,
        },
      ],
      credits: {
        enabled: false,
      },
    });
  }

  // -----------------------------------------------------------------------------------------------------------------------
  chart = new Chart({
    chart: {
      type: 'bar',
      height: 180,
    },
    title: {
      text: 'Top 3 Products',
    },
    xAxis: {
      categories: [
        'Lenova Thinkpad E15',
        'Nectar Orange Juice',
        'Axe Deodarant',
        'Axe1 Deodarant',
        'Axe1 Deodarant',
      ],
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    series: [
      {
        type: 'bar',
        showInLegend: false,
        data: [
          {
            name: 'Lenova Thinkpad E15',
            y: 395,
            color: '#044342',
          },
          {
            name: 'Nectar Orange Juice',
            y: 385,
            color: '#7e0505',
          },
          {
            name: 'Axe Deodarant',
            y: 275,
            color: '#ed9e20',
          },
          {
            name: 'Axe Deodarant',
            y: 275,
            color: '#ed9e20',
          },
          {
            name: 'Axe Deodarant',
            y: 275,
            color: '#ed9e20',
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  });
}
