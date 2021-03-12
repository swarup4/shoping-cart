import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Api } from '../apiConstants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headersOption = {}
  userApi = 'http://127.0.0.1:3001/api/user';
  constructor(private http: HttpClient) { 
    // let header = new HttpHeaders();
    // header.append('Content-Type', 'application/json');
    // this.headersOption = {
    //   headers: header
    // }
  }

  loginUsers(data) {
    const url = this.userApi + '/login';
    return this.http.post(url, data);
  }

  signupUser(data) {
    const url = this.userApi + '/signup';
    return this.http.post(url, data);
  }

  activateDeactivateUser(id, statusCode) {
    const url = this.userApi + '/activeDeactivateUser/' + id;
    let data = {
      status: statusCode
    };
    return this.http.put(url, data);
  }

  addUserDetails(data) {
    const url = this.userApi + '/insertUserDetails';
    return this.http.post(url, data);
  }

  getUserDetails(id) {
    const url = this.userApi + '/userDetails/' + id;
    return this.http.get(url);
  }
  updateUserDetails(id, data) {
    const url = this.userApi + '/updateUserDetails/' + id;
    return this.http.put(url, data);
  }
}