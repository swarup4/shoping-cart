import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface ProductData {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  active: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image', 'name', 'category', 'price', 'quantity', 'active'];
  dataSource: MatTableDataSource<ProductData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private router: Router) {
    // Create 100 users

    const products = [
      { id: 1, image: "assets/a-walk-amongst-friends.jpg", name: "A Walk Amongst Friends - Canvas Print", category: "Canvas Print", price: 10.24, quantity: 3, active: 1 },
      { id: 2, image: "assets/braies-lake.jpg", name: "Braies Lake - Canvas Print", category: "Canvas Print", price: 10.24, quantity: 20, active: 0 },
      { id: 3, image: "assets/fall-glow.jpg", name: "Fall Glow - Canvas Print", category: "Canvas Print", price: 10.24, quantity: 10, active: 1 },
      { id: 4, image: "assets/first-snow.jpg", name: "First Snow - Canvas Print", category: "Canvas Print", price: 10.24, quantity: 33, active: 1 },
      { id: 5, image: "assets/lago-di-braies.jpg", name: "Lago di Braies - Canvas Print", category: "Canvas Print", price: 10.24, quantity: 50, active: 0 },
      { id: 6, image: "assets/lago-di-sorapis.jpg", name: "Lago di Sorapis - Canvas Print", category: "Canvas Print", price: 10.24, quantity: 100, active: 0 },
      { id: 7, image: "assets/morain-lake.jpg", name: "Morain Lake - Canvas Print", category: "Canvas Print", price: 10.24, quantity: 13, active: 1 },
      { id: 8, image: "assets/never-stop-changing.jpg", name: "Never Stop Changing - Canvas Print", category: "Canvas Print", price: 10.24, quantity: 15, active: 1 },
      { id: 9, image: "assets/reaching.jpg", name: "Reaching - Canvas Print", category: "Canvas Print", price: 10.24, quantity: 18, active: 1 },
      { id: 10, image: "assets/yosemite.jpg", name: "Yosemite - Canvas Print", category: "Canvas Print", price: 10.24, quantity: 25, active: 0 },
      { id: 11, image: "assets/a-walk-amongst-friends.jpg", name: "A Walk Amongst Friends", category: "Canvas Print", price: 10.24, quantity: 30, active: 1 },
      { id: 12, image: "assets/braies-lake.jpg", name: "Braies Lake", category: "Canvas Print", price: 10.24, quantity: 3, active: 0 },
      { id: 13, image: "assets/fall-glow.jpg", name: "Fall Glow", category: "Canvas Print", price: 10.24, quantity: 13, active: 1 },
      { id: 14, image: "assets/first-snow.jpg", name: "First Snow", category: "Canvas Print", price: 10.24, quantity: 23, active: 0 },
      { id: 15, image: "assets/lago-di-braies.jpg", name: "Lago di Braies", category: "Canvas Print", price: 10.24, quantity: 33, active: 0 },
      { id: 16, image: "assets/lago-di-sorapis.jpg", name: "Lago di Sorapis", category: "Canvas Print", price: 10.24, quantity: 8, active: 1 },
      { id: 17, image: "assets/morain-lake.jpg", name: "Morain Lake", category: "Canvas Print", price: 10.24, quantity: 30, active: 0 },
      { id: 18, image: "assets/never-stop-changing.jpg", name: "Never Stop Changing", category: "Canvas Print", price: 10.24, quantity: 50, active: 1 },
      { id: 19, image: "assets/reaching.jpg", name: "Reaching", category: "Canvas Print", price: 10.24, quantity: 5, active: 1 },
      { id: 20, image: "assets/yosemite.jpg", name: "Yosemite", category: "Canvas Print", price: 10.24, quantity: 17, active: 0 },
      { id: 21, image: "assets/a-walk-amongst-friends.jpg", name: "A Walk Amongst Friends", category: "Canvas Print", price: 10.24, quantity: 3, active: 1 }
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(products);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getProductDetails(id) {
    this.router.navigate(['/admin/product/details/' + id]);
  }
  addProduct() {
    this.router.navigate(['/admin/product/new']);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}