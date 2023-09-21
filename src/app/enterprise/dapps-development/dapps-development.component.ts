import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-dapps-development',
  templateUrl: './dapps-development.component.html',
  styleUrls: ['./dapps-development.component.css'],
})
export class DappsDevelopmentComponent implements OnInit {
  title =
    'Highly Scalable Dapps For Your Global Audience - Dapp  Development Services | BlockchainX';
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
        'You’re Dapp ideas are just days away from being functional products. Hire experts from a leading dapps development company.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'dapp development, dapps development services, dapp development company, defi dapp development,blockchain dapp development',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Highly Scalable Dapps For Your Global Audience - Dapp  Development Services | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://blockchainx.tech/dapps-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'You’re Dapp ideas are just days away from being functional products. Hire experts from a leading dapps development company.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/dapps-development.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://blockchainx.tech/dapps-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Highly Scalable Dapps For Your Global Audience - Dapp  Development Services | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'You’re Dapp ideas are just days away from being functional products. Hire experts from a leading dapps development company.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/dapps-development.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://blockchainx.tech/dapps-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', 'https://blockchainx.tech/dapps-development');
    this.doc.head.appendChild(link);
  }
}
