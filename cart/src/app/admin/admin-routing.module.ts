import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  { path: 'admin', component: HomeComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'product', component: ProductComponent },
    { path: 'product/details/:id', component: ProductDetailsComponent },
    { path: 'product/new', component: ProductDetailsComponent },
    { path: 'order', component: OrderComponent },
    { path: 'order/details/:id', component: OrderDetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
