import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isDesktopMode = signal<boolean>(true);

  constructor() { }

  setDisplayMode(state: boolean) {
    this.isDesktopMode.set(state);
  }
}
