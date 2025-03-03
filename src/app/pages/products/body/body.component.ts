import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../models/product.model';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';

@Component({
  selector: 'app-body',
  imports: [ProductCardComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  productService = inject(ProductService);
  products = signal<Product[]>(this.productService.products().filter((product) => product.category === "men's clothing"));
}
