import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-bridge-smart-contract',
  templateUrl: './bridge-smart-contract.component.html',
  styleUrls: ['./bridge-smart-contract.component.css'],
})
export class BridgeSmartContractComponent implements OnInit {
  title =
    'Cross-chain Bridge Smart Contract Development Services -  Bringing cross-chain to your project  - BlockchainX';
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
        'Transfer your project’s tokens across multiple blockchains with our Bridge smart contract development service. Launch a secure cross-chain protocol with our bridge smart contract.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'cross chain bridge development, bridge smart contract development services, bridge smart contract development services, build a cross chain bridge.  ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Cross-chain Bridge Smart Contract Development Services -  Bringing cross-chain to your project  - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/bridge-smart-contract-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Transfer your project’s tokens across multiple blockchains with our Bridge smart contract development service. Launch a secure cross-chain protocol with our bridge smart contract.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/Cross-chain-Bridge-Smart-Contract-Development-Services.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/bridge-smart-contract-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Cross-chain Bridge Smart Contract Development Services -  Bringing cross-chain to your project  - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Transfer your project’s tokens across multiple blockchains with our Bridge smart contract development service. Launch a secure cross-chain protocol with our bridge smart contract.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/Cross-chain-Bridge-Smart-Contract-Development-Services.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/bridge-smart-contract-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/bridge-smart-contract-development'
    );
    this.doc.head.appendChild(link);
  }
}
