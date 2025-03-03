import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../models/product.model';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';

@Component({
  selector: 'app-hair',
  imports: [ProductCardComponent],
  templateUrl: './hair.component.html',
  styleUrl: './hair.component.css'
})
export class HairComponent {
  productService = inject(ProductService);
  products = signal<Product[]>(this.productService.products().filter((product) => product.category === 'electronics'));

}
