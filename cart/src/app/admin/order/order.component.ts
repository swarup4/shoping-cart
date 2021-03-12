import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface ProductData {
  id: number;
  // reference: string;
  customer: string;
  mode: string;
  total: number;
  status: string;
  date: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  displayedColumns: string[] = ['id', 'customer', 'total', 'mode', 'status', 'date'];
  dataSource: MatTableDataSource<ProductData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    //  Payment Error Payment accepted, Delivered, Preparing the order, Shipped, Canceled, Refunded, On pre-order (paid),     

    const products = [
      {id: 1, customer: "Dollie Bullock", mode: "Credit Card", total: 10.24, status: "Payment Error", date: "2018/04/25 02:07:59" },
      {id: 2, customer: "Dollie Bullock", mode: "Paytm", total: 10.24, status: "On pre-order (paid)", date: "2018/04/25 02:07:59" },
      {id: 3, customer: "Dollie Bullock", mode: "Paytm", total: 10.24, status: "Refunded", date: "2018/04/25 02:07:59" },
      {id: 4, customer: "Dollie Bullock", mode: "PhonePe", total: 10.24, status: "Delivered", date: "2018/04/25 02:07:59" },
      {id: 5, customer: "Dollie Bullock", mode: "Google Pay", total: 10.24, status: "Payment accepted", date: "2018/04/25 02:07:59" },
      {id: 6, customer: "Dollie Bullock", mode: "Cash On Delivery", total: 10.24, status: "Preparing the order", date: "2018/04/25 02:07:59" },
      {id: 7, customer: "Dollie Bullock", mode: "PhonePe", total: 10.24, status: "On pre-order (paid)", date: "2018/04/25 02:07:59" },
      {id: 8, customer: "Dollie Bullock", mode: "Cash On Delivery", total: 10.24, status: "Canceled", date: "2018/04/25 02:07:59" },
      {id: 9, customer: "Dollie Bullock", mode: "Credit Card", total: 10.24, status: "Shipped", date: "2018/04/25 02:07:59" },
      {id: 10, customer: "Dollie Bullock", mode: "Google Pay", total: 10.24, status: "Payment Error", date: "2018/04/25 02:07:59" }
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(products);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
