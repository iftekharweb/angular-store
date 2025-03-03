import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../models/product.model';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';

@Component({
  selector: 'app-face',
  imports: [ProductCardComponent],
  templateUrl: './face.component.html',
  styleUrl: './face.component.css'
})
export class FaceComponent {
  productService = inject(ProductService);
  products = signal<Product[]>(this.productService.products());
}
