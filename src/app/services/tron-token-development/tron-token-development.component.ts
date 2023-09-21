import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-tron-token-development',
  templateUrl: './tron-token-development.component.html',
  styleUrls: ['./tron-token-development.component.css'],
})
export class TronTokenDevelopmentComponent implements OnInit {
  title =
    'Tron Token Development Services | TRC20 Token Generator - BlockchainX';
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
        'Tron token development is your best choice if you want all the functionalities of Ethereum, without the outrageous gas fees. Our Tron token development services allow you to create and deploy tokens on the tron network in minutes.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Tron token development,Tron token development services,Tron token development company',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Tron Token Development Services | TRC20 Token Generator - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/tron-token-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Tron token development is your best choice if you want all the functionalities of Ethereum, without the outrageous gas fees. Our Tron token development services allow you to create and deploy tokens on the tron network in minutes.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/tron-token-development.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/tron-token-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Tron Token Development Services | TRC20 Token Generator - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Tron token development is your best choice if you want all the functionalities of Ethereum, without the outrageous gas fees. Our Tron token development services allow you to create and deploy tokens on the tron network in minutes.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/tron-token-development.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/tron-token-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/tron-token-development'
    );
    this.doc.head.appendChild(link);
  }
}
