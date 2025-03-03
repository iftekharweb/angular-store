import { Component, signal } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-slide-image-section',
  imports: [IonIcon],
  templateUrl: './slide-image-section.component.html',
  styleUrl: './slide-image-section.component.css',
})
export class SlideImageSectionComponent {
  slideImages = signal<string[]>([
    './shampoo.jpg',
    './facewash.jpg',
    './body.jpg',
  ]);
  slideTitle = signal<string[]>([
    'Your hair, but better.',
    'Your face, but cleaner.',
    'Your body, but smoother.',
  ]);
  slideText = signal<string[]>([
    'Our shampoo is made with natural ingredients that will leave your hair feeling soft and healthy.',
    'Our facewash is made with natural ingredients that will leave your face feeling clean and refreshed.',
    'Our body wash is made with natural ingredients that will leave your skin feeling smooth and hydrated.',
  ]);
  slideIndex = signal<number>(0);

  previousImg() {
    this.slideIndex.set(
      (this.slideImages().length + this.slideIndex() - 1) % this.slideImages().length
    );
  }
  nextImg() {
    this.slideIndex.set((this.slideIndex() + 1) % this.slideImages().length);
  }
}
