import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  searchOutline,
  chevronBackOutline,
  desktopOutline,
  phonePortraitOutline,
  bagHandleOutline,
  chevronDownOutline,
  closeOutline,
  chevronForwardOutline
} from 'ionicons/icons';
import { IonIcon } from '@ionic/angular/standalone';
import { FixedHeaderComponent } from './components/headers/fixed-header/fixed-header.component';
import { NavHeaderComponent } from './components/headers/nav-header/nav-header.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IonIcon, FixedHeaderComponent, NavHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'store';

  constructor() {
    addIcons({
      searchOutline,
      chevronBackOutline,
      desktopOutline,
      phonePortraitOutline,
      bagHandleOutline,
      chevronDownOutline,
      closeOutline,
      chevronForwardOutline
    });
  }
}
