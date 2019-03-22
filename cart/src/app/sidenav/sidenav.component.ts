import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

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
