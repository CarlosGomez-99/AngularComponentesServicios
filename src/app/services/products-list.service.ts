import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProducts() {
    return this.httpClient.get<Product[]>('https://fakestoreapi.com/products');
  }
}
