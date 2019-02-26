import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';

import { Api } from '../apiConstants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUsers(data) {
    const url = Api.userApi + '/login';
    return this.http.post(url, data);
  }

  signupUser(data) {
    const url = Api.userApi + '/signup';
    return this.http.post(url, data);
  }

  activateDeactivateUser(id, statusCode) {
    const url = Api.userApi + '/activeDeactivateUser/' + id;
    let data = {
      status: statusCode
    };
    return this.http.put(url, data);
  }

  addUserDetails(data) {
    const url = Api.userApi + '/insertUserDetails';
    return this.http.post(url, data);
  }

  getUserDetails(id) {
    const url = Api.userApi + '/userDetails/' + id;
    return this.http.get(url);
  }
  updateUserDetails(id, data) {
    const url = Api.userApi + '/updateUserDetails/' + id;
    return this.http.put(url, data);
  }
}