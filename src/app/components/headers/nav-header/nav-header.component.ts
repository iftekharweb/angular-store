import { Component, signal } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-nav-header',
  imports: [IonIcon],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css'
})
export class NavHeaderComponent {
  isSearching = signal<boolean>(false);
  isMenuOpen = signal<boolean>(false);

  toggleIsSearching() {
    this.isSearching.set(!this.isSearching());
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

}
