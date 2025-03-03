import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from "@ionic/angular/standalone";
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-nav-header',
  imports: [IonIcon, RouterLink],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {
  isSearching = signal<boolean>(false);
  isMenuOpen = signal<boolean>(false);
  productService = inject(ProductService);

  toggleIsSearching() {
    this.isSearching.set(!this.isSearching());
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

}
