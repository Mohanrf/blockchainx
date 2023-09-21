import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-sto-coin-development',
  templateUrl: './sto-coin-development.component.html',
  styleUrls: ['./sto-coin-development.component.css'],
})
export class StoCoinDevelopmentComponent implements OnInit {
  title =
    'Avail Security Token Development For Your Next Project - Create Industry-Standard Security Tokens | BlockchainX';
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
        'Reach out to BlockchainX to avail of our STO development services, ensuring trust, and security, eventually contributing to scaling your business, as well as crypto projects. We ensure to serve efficient and self-sustained Security token development services for your meeting the market standards.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'security token development, Sto development services, Security token offering services Sto services, Security token offering development',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Avail Security Token Development For Your Next Project - Create Industry-Standard Security Tokens | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/security-token-offering-services',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Reach out to BlockchainX to avail of our STO development services, ensuring trust, and security, eventually contributing to scaling your business, as well as crypto projects. We ensure to serve efficient and self-sustained Security token development services for your meeting the market standards.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/security-token.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/security-token-offering-services',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Avail Security Token Development For Your Next Project - Create Industry-Standard Security Tokens | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Reach out to BlockchainX to avail of our STO development services, ensuring trust, and security, eventually contributing to scaling your business, as well as crypto projects. We ensure to serve efficient and self-sustained Security token development services for your meeting the market standards.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/security-token.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/security-token-offering-services'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/security-token-offering-services'
    );
    this.doc.head.appendChild(link);
  }
}
