import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './login/auth-guard.service';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  { path: '', component: HomeComponent, children:[
    { path: '', component: DashboardComponent },
    { path: 'product', component: ProductComponent }
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'myprofile', component: UsersComponent, canActivate: [AuthGuardService], children: [
  //   { path: '', component: UserdetailsComponent },
  //   { path: 'order', component: OrderComponent }
  // ]},
  { path: 'myprofile', component: UsersComponent, children: [
    { path: '', component: UserdetailsComponent },
    { path: 'order', component: OrderComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
