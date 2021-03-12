import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username;
  isLogedIn = false;
  constructor() { }

  ngOnInit() {
    if(sessionStorage.userDetails != undefined){
      let userData = JSON.parse(sessionStorage.userDetails);
      this.username = userData['username'];
      this.isLogedIn = true;
    }else{
      this.username = "Guest";
      this.isLogedIn = false;
    }
  }

}
