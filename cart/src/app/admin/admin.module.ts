import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    HomeComponent, 
    DashboardComponent, 
    ProductComponent, 
    SidenavComponent, 
    ProductDetailsComponent, 
    OrderComponent, 
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
