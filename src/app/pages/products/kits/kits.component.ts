import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../models/product.model';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';

@Component({
  selector: 'app-kits',
  imports: [ProductCardComponent],
  templateUrl: './kits.component.html',
  styleUrl: './kits.component.css'
})
export class KitsComponent {
  productService = inject(ProductService);
  products = signal<Product[]>(this.productService.products());
}
