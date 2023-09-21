import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-defi-vs-cefi',
  templateUrl: './defi-vs-cefi.component.html',
  styleUrls: ['./defi-vs-cefi.component.css'],
})
export class DefiVsCefiComponent implements OnInit {
  title =
    'DeFi vs CeFi : What are they and which one is suitable for your business';
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
        'When it comes to buying and storing your hard-earned cryptocurrencies and crypto assets, you will be faced with a choice: CeFi(centralized finance) vs DeFi (decentralized finance). From this blog , you can decide which is better for you',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'CeFi(centralized finance) vs DeFi (decentralized finance), DeFi vs CeFi, DeFi vs CeFi differences',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'DeFi vs CeFi : What are they and which one is suitable for your business',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/defi-vs-cefi',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'When it comes to buying and storing your hard-earned cryptocurrencies and crypto assets, you will be faced with a choice: CeFi(centralized finance) vs DeFi (decentralized finance). From this blog , you can decide which is better for you',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/defi-vs-cefi.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/defi-vs-cefi',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'DeFi vs CeFi : What are they and which one is suitable for your business',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'When it comes to buying and storing your hard-earned cryptocurrencies and crypto assets, you will be faced with a choice: CeFi(centralized finance) vs DeFi (decentralized finance). From this blog , you can decide which is better for you',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/defi-vs-cefi.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/defi-vs-cefi'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', 'https://www.blockchainx.tech/amp/defi-vs-cefi');
    this.doc.head.appendChild(link);
  }
}
