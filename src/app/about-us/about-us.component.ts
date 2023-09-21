import { Component, Inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../shared/canonical.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  title = 'About us | Blockchain development company - Blockchainx ';
  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content:
        'BlockchainX is a world-class blockchain company that delivers top-notch projects in crypto & blockchain products with highest efficiency & exceptional quality on a global scale.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: '',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'About us | Blockchain development company - Blockchainx ',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/about-us',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'BlockchainX is a world-class blockchain company that delivers top-notch projects in crypto & blockchain products with highest efficiency & exceptional quality on a global scale.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/about-us',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'About us | Blockchain development company - Blockchainx',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'BlockchainX is a world-class blockchain company that delivers top-notch projects in crypto & blockchain products with highest efficiency & exceptional quality on a global scale.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/about-us'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', '');
    this.doc.head.appendChild(link);
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    navSpeed: 500,
    margin: 30,
    dots: false,
    center: true,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      740: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1280: {
        items: 4,
      },
      1600: {
        items: 5,
      },
    },
    nav: false,
  };

  clientOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    navSpeed: 500,
    margin: 30,
    dots: false,
    center: true,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      740: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1280: {
        items: 5.5,
      },
      1600: {
        items: 6,
      },
    },
    nav: false,
  };
  logoOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    navSpeed: 500,
    margin: 30,
    dots: false,
    center: true,
    navText: [],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      740: {
        items: 5,
      },
      1000: {
        items: 5,
      },
      1280: {
        items: 5.5,
      },
      1600: {
        items: 6,
      },
    },
    nav: false,
  };
  aboutOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    navSpeed: 500,
    margin: 10,
    dots: false,
    center: true,
    navText: [],
    responsive: {
      0: {
        items: 1.1,
      },
      600: {
        items: 3,
      },
      740: {
        items: 5,
      },
      1000: {
        items: 5,
      },
      1280: {
        items: 5.5,
      },
      1600: {
        items: 6,
      },
    },
    nav: false,
  };
}
