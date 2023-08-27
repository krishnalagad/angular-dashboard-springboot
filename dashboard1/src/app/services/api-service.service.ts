import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  BASE_URL = 'http://localhost:8080/api/v1';

  constructor(private _http: HttpClient) {}

  // get all details.
  public getAllData() {
    return this._http.get(`${this.BASE_URL}/get-all`);
  }

  // get all data for table.
  public getAllDataForTable() {
    return this._http.get(`${this.BASE_URL}/get-table-data`);
  }

  // get data for pie chart.
  public getDataForPie() {
    return this._http.get(`${this.BASE_URL}/get-pie-data`);
  }

  // get data for bar chart.
  public getDataForBar(){
    return this._http.get(`${this.BASE_URL}/get-bar-data`);
  }
}
