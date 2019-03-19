import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Helper } from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    debugger;
    let userData = JSON.parse(sessionStorage.userDetails);
    let timeOutStatus = Helper.compareTimeOut(new Date(userData.currentTime));
    if(timeOutStatus){
      return true;
    }else{
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}
