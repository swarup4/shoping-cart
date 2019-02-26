import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';

import { LoginService } from './login/login.service';
import { HomeService } from './home/home.service';
import { ProductsService } from './products/products.service';
import { OrderService } from './order/order.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    OrderComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    // BrowserAnimationsModule,
    // MatInputModule, MatButtonModule, MatCheckboxModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, HomeService, ProductsService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
