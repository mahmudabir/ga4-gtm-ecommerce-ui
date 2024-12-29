import {inject, Injectable, InjectionToken} from '@angular/core';
import {DOCUMENT} from '@angular/common';

export const WINDOW = new InjectionToken<Window>('Global window object', {
  factory: (): Window => <Window>inject(DOCUMENT)?.defaultView
});

@Injectable({
  providedIn: 'root'
})
export class DataLayerService {

  private readonly window = inject(WINDOW);
  private readonly document = inject(DOCUMENT);

  constructor() {
    // this.window.dataLayer = this.window.dataLayer || [];
    // data
  }

  push(event: any) {
    if (window && Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push(event);
    } else {
      console.error('dataLayer is not defined.');
    }
  }


}
