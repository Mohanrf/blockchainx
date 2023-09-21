import { Component, Inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-crypto-currency-development',
  templateUrl: './crypto-currency-development.component.html',
  styleUrls: ['./crypto-currency-development.component.css'],
})
export class CryptoCurrencyDevelopmentComponent implements OnInit {
  title =
    'Cryptocurrency development services - Secure and Scalable Cryptocurrency Development Services for Your Business - BlockchainX';
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
        'Quickly and conveniently craft your own crypto with BlockchainXs high-end cryptocurrency development services. Team up with our knowledgeable experts.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'cryptocurrency development,cryptocurrency development companies ,cryptocurrency development service',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Cryptocurrency development services - Secure and Scalable Cryptocurrency Development Services for Your Business - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/crypto-currency-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Quickly and conveniently craft your own crypto with BlockchainXs high-end cryptocurrency development services. Team up with our knowledgeable experts.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/cryptocurrency-development-company.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/crypto-currency-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Cryptocurrency development services - Secure and Scalable Cryptocurrency Development Services for Your Business - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Quickly and conveniently craft your own crypto with BlockchainXs high-end cryptocurrency development services. Team up with our knowledgeable experts.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/cryptocurrency-development-company.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/crypto-currency-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/crypto-currency-development'
    );
    this.doc.head.appendChild(link);
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    margin: 30,
    dots: false,
    autoHeight: true,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },

      1024: {
        items: 5,
      },

      1366: {
        items: 5,
      },
    },
    nav: false,
  };
}
