import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-ektachain',
  templateUrl: './ektachain.component.html',
  styleUrls: ['./ektachain.component.css'],
})
export class EktachainComponent implements OnInit {
  title = 'Ekta | Bringing blockchain to the real world - BlockchainX';
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
        'Know more about EKTA Marketplace to bring your fantasy to life and bridge blockchain to the physical world with Web3, and initiate profit with purpose.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Blockchain, Distributed Ledgers, Blockchain Technology, Cryptocurrency, Enterprise Technology, Cryptocurrency',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Ekta | Bringing blockchain to the real world - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/ektachain',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Know more about EKTA Marketplace to bring your fantasy to life and bridge blockchain to the physical world with Web3, and initiate profit with purpose.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/ektachain',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Ekta | Bringing blockchain to the real world - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Know more about EKTA Marketplace to bring your fantasy to life and bridge blockchain to the physical world with Web3, and initiate profit with purpose.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/ektachain'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', 'https://www.blockchainx.tech/ektachain');
    this.doc.head.appendChild(link);
  }
}
