import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})

export class CanonicalService {

  constructor(@Inject(DOCUMENT) private dom) { }
  setCanonicalURL(url?: string) {
    this.destroyLinkForCanonicalURL()
    const canURL = url == undefined ? this.dom.URL : url;
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', canURL);

  }
  destroyLinkForCanonicalURL() {
    const els = document.querySelectorAll('link[rel=\'canonical\']');
    for (let i = 0, l = els.length; i < l; i++) {
      const el = els[i];
      el.remove();
    }
  }
  destroyLinkForAmpURL() {
    const els = document.querySelectorAll('link[rel=\'amphtml\']');
    for (let i = 0, l = els.length; i < l; i++) {
      const el = els[i];
      el.remove();
    }
  }
}
