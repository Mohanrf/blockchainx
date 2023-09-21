import { Component, Inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-bep20-token-development',
  templateUrl: './bep20-token-development.component.html',
  styleUrls: ['./bep20-token-development.component.css'],
})
export class Bep20TokenDevelopmentComponent implements OnInit {
  title =
    'Binance BEP20 Token Development | BEP2 Token Creation Services - BlockchainX Tech';
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
        'Get the best BEP20 token development service from BlockchainX to launch a BEP20 token on the Binance smartchain ecosystem. Team up with us to effectively grow your business.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Bep20 token Development Company, Bep20 token Development Services, create bep20 token',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Binance BEP20 Token Development | BEP2 Token Creation Services - BlockchainX Tech',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/bep20-token-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Get the best BEP20 token development service from BlockchainX to launch a BEP20 token on the Binance smartchain ecosystem. Team up with us to effectively grow your business.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/bep20-tokens.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/bep20-token-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Binance BEP20 Token Development | BEP2 Token Creation Services - BlockchainX Tech',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Get the best BEP20 token development service from BlockchainX to launch a BEP20 token on the Binance smartchain ecosystem. Team up with us to effectively grow your business.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/bep20-tokens.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/bep20-token-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/bep20-token-development'
    );
    this.doc.head.appendChild(link);
  }
  tokenOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    dots: false,
    autoHeight: true,
    margin: 25,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },

      1024: {
        items: 3,
      },

      1366: {
        items: 3,
      },
    },
    nav: false,
  };
}
