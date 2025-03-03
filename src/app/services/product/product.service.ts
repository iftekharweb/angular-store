import { Injectable, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = signal<Product[]>([]);
  cartProducts = signal<Product[]>([]);

  addToCard(product: Product) {
    this.cartProducts.update((products) => [...products, product]);
  }
}
