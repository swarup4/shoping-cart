import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Api } from '../apiConstants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  headersOption = {}
  orderApi = 'http://127.0.0.1:3001/api/order';
  constructor(private http: HttpClient) { }

  refreshToken(){
    let header = {
      authorization: sessionStorage.token
    };
    this.headersOption = {
      headers: header
    }
  }

  getAllOrder(){
    debugger;
    let url = this.orderApi;
    this.refreshToken();
    return this.http.get(url + '/getAllOrder', this.headersOption);
  }
}
