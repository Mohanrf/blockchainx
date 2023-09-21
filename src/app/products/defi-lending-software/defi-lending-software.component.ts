import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-defi-lending-software',
  templateUrl: './defi-lending-software.component.html',
  styleUrls: ['./defi-lending-software.component.css'],
})
export class DefiLendingSoftwareComponent implements OnInit {
  title =
    'DeFi Lending Platform - Leverage the potential of your assets with DeFi lending software solutions - BlockchainX ';
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
        'Build innovative and secure DeFi lending solutions that use blockchain technology to provide individuals and businesses with access to decentralized finance.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'DeFi Lending Platform, DeFi lending software development, DeFi Lending Software ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'DeFi Lending Platform - Leverage the potential of your assets with DeFi lending software solutions - BlockchainX ',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/blockchain-lending-software-using-defi',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Build innovative and secure DeFi lending solutions that use blockchain technology to provide individuals and businesses with access to decentralized finance.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/Defi-Lending.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/blockchain-lending-software-using-defi',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'DeFi Lending Platform - Leverage the potential of your assets with DeFi lending software solutions - BlockchainX ',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Build innovative and secure DeFi lending solutions that use blockchain technology to provide individuals and businesses with access to decentralized finance.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/Defi-Lending.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/blockchain-lending-software-using-defi'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/blockchain-lending-software-using-defi'
    );
    this.doc.head.appendChild(link);
  }
}
