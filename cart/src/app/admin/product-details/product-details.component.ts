import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productName;

  product = [
    {id: 1, image:"assets/a-walk-amongst-friends.jpg", name: "A Walk Amongst Friends - Canvas Print", category: "Canvas Print", price: 10.24, quantity: 3, active: 1}
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    if(this.router.url == "/admin/product/new"){
      this.productName = "New Product";
    }else{
      this.productName = this.product[0].name;
    }
  }

}
