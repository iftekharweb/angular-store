import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  imports: [ProductCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  productService = inject(ProductService);

  totoal = signal<number>(
    this.productService
      .cartProducts()
      .reduce((acc, product) => acc + product.price, 0)
  );

  removeProduct(product: Product) {
    this.productService.cartProducts.update((products) =>
      products.filter((p) => p !== product)
    );
    this.totoal.set(
      this.productService.cartProducts().reduce((acc, p) => acc + p.price, 0)
    );
  }
}
