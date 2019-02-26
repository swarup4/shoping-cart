import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {};
  constructor(private loginService: LoginService) { }

  loginUser(user){
    this.loginService.loginUsers(user).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

}
