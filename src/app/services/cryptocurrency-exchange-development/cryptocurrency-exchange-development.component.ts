import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-cryptocurrency-exchange-development',
  templateUrl: './cryptocurrency-exchange-development.component.html',
  styleUrls: ['./cryptocurrency-exchange-development.component.css'],
})
export class CryptocurrencyExchangeDevelopmentComponent implements OnInit {
  title =
    'Exchange software - Cryptocurrency exchange software development | BlockchainX';
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
        'Launch your P2P or OTC type hybrid AI/ML powered Cryptocurrency exchange software which is enterprise level to process billions of orders per second. Hire Blockchain experts at BlockchainX for your exchange software development service to stand out from your competitors! Speed - Secure - Automated Revenue system.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'exchange software development, cryptocurrency exchange software open source, crypto exchange development, Cryptocurrency exchange software development',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Exchange software - Cryptocurrency exchange software development | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/cryptocurrency-exchange-software-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Launch your P2P or OTC type hybrid AI/ML powered Cryptocurrency exchange software which is enterprise level to process billions of orders per second. Hire Blockchain experts at BlockchainX for your exchange software development service to stand out from your competitors! Speed - Secure - Automated Revenue system.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/cryptocurrency-development.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/cryptocurrency-exchange-software-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Exchange software - Cryptocurrency exchange software development | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Launch your P2P or OTC type hybrid AI/ML powered Cryptocurrency exchange software which is enterprise level to process billions of orders per second. Hire Blockchain experts at BlockchainX for your exchange software development service to stand out from your competitors! Speed - Secure - Automated Revenue system.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/cryptocurrency-development.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/cryptocurrency-exchange-software-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/cryptocurrency-exchange-software-development'
    );
    this.doc.head.appendChild(link);
  }
}
