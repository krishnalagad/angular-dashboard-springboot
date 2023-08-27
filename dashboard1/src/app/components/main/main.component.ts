import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  allData: any = [];

  constructor(private _api: ApiServiceService) {}

  ngOnInit(): void {
    this._api.getAllData().subscribe({
      next: (data: any) => {
        this.allData = data;
        // console.log(this.allData);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('Request Completed.');
      },
    });
  }
}
