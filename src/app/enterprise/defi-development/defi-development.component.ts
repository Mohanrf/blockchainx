import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-defi-development',
  templateUrl: './defi-development.component.html',
  styleUrls: ['./defi-development.component.css'],
})
export class DefiDevelopmentComponent implements OnInit {
  title =
    'Decentralized Finance (DeFi) Development Services | Hire DeFi Developers - BlockchainX';
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
        'DeFi - Decentralized Finance development the future in the FinTech Industry. Hire DeFi Developers for all Decentralized Finance Development Services like DeFi Tokens, DeFi Dapps, DeFi Lending and borrowing software, DeFi Wallets, and other DeFi projects.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Defi development company, Decentralized Finance Development company, Decentralized Finance solution provider, Decentralized finance applications, Defi development services, Defi development solutions',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Decentralized Finance (DeFi) Development Services | Hire DeFi Developers - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/decentralized-finance-defi-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'DeFi - Decentralized Finance development the future in the FinTech Industry. Hire DeFi Developers for all Decentralized Finance Development Services like DeFi Tokens, DeFi Dapps, DeFi Lending and borrowing software, DeFi Wallets, and other DeFi projects.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/defi-development.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/decentralized-finance-defi-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Decentralized Finance (DeFi) Development Services | Hire DeFi Developers - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'DeFi - Decentralized Finance development the future in the FinTech Industry. Hire DeFi Developers for all Decentralized Finance Development Services like DeFi Tokens, DeFi Dapps, DeFi Lending and borrowing software, DeFi Wallets, and other DeFi projects.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/defi-development.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/decentralized-finance-defi-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/decentralized-finance-defi-development'
    );
    this.doc.head.appendChild(link);
  }
}
