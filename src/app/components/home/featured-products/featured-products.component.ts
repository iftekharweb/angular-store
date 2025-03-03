import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-featured-products',
  imports: [],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent {
  productService = inject(ProductService);
  products = signal<Product[]>([]);

  constructor() {
    effect(() => this.filterTopFourProducts());
  }

  filterTopFourProducts() {
    const products = this.productService.products().sort((a, b) => b.rating.rate - a.rating.rate);
    this.products.set(products.slice(0, 4));
  }

}
