import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-cold-wallet-integration',
  templateUrl: './cold-wallet-integration.component.html',
  styleUrls: ['./cold-wallet-integration.component.css'],
})
export class ColdWalletIntegrationComponent implements OnInit {
  title = 'Securely store your crypto assets with the cold wallet';
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
        'Do you want to protect your assets from hackers in the long run? We assist you in Integrating a cold wallet, which helps you stay more secure against hacking and theft. Get assistance from our experts to protect and secure your assets.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Cold wallet development, Cold wallet integration with web apps',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Securely store your crypto assets with the cold wallet',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/cold-wallet-integration',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Do you want to protect your assets from hackers in the long run? We assist you in Integrating a cold wallet, which helps you stay more secure against hacking and theft. Get assistance from our experts to protect and secure your assets.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/crypto-cold-wallet-integration.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/cold-wallet-integration',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Securely store your crypto assets with the cold wallet',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Do you want to protect your assets from hackers in the long run? We assist you in Integrating a cold wallet, which helps you stay more secure against hacking and theft. Get assistance from our experts to protect and secure your assets.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/crypto-cold-wallet-integration.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/cold-wallet-integration'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/cold-wallet-integration'
    );
    this.doc.head.appendChild(link);
  }
}
