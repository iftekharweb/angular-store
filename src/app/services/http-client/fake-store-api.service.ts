import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreApiService {
  http = inject(HttpClient);

  getProducts() {
    const url = 'https://fakestoreapi.com/products';
    return this.http.get<Product[]>(url);
  }
}
