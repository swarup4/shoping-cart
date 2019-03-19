import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Api } from '../apiConstants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  headersOption = {}
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
    let url = Api.orderApi;
    this.refreshToken();
    return this.http.get(url + '/getAllOrder', this.headersOption);
  }
}
