import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Api } from '../apiConstants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
}
