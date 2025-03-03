import { Component, inject, OnInit } from '@angular/core';
import { SlideImageSectionComponent } from '../../components/home/slide-image-section/slide-image-section.component';
import { FeaturedProductsComponent } from '../../components/home/featured-products/featured-products.component';
import { FakeStoreApiService } from '../../services/http-client/fake-store-api.service';
import { ProductService } from '../../services/product/product.service';
import { HairSectionComponent } from '../../components/home/hair-section/hair-section.component';
import { BodySectionComponent } from '../../components/home/body-section/body-section.component';
import { FaceSectionComponent } from '../../components/home/face-section/face-section.component';
import { KitSectionComponent } from '../../components/home/kit-section/kit-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    SlideImageSectionComponent,
    FeaturedProductsComponent,
    HairSectionComponent,
    BodySectionComponent,
    FaceSectionComponent,
    KitSectionComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  httpService = inject(FakeStoreApiService);
  productService = inject(ProductService);

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    this.httpService.getProducts().subscribe({
      next: (products) => {
        this.productService.products.set(products);
        console.log("🚁 ~ PRODUCTS ~ ", products);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
