import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username: undefined,
    password: undefined
  };
  constructor(private loginService: LoginService, private route: Router) { }

  loginUser(user) {
    this.loginService.loginUsers(user).subscribe(res => {
      debugger;
      sessionStorage.token = res['token'];
      sessionStorage.userDetails = JSON.stringify(res);
      this.route.navigate(['/order']);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

}
