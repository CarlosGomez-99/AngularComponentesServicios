import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsListService } from '../../services/products-list.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2021, 1, 21);

  constructor(
    private storeService: StoreService,
    private productsListService: ProductsListService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit() {
    this.productsListService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
