import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  getAllOrderData() {
    this.orderService.getAllOrder().subscribe(res => {
      debugger;
      sessionStorage.token = res['token'];
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
