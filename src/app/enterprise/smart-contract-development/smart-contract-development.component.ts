import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-smart-contract-development',
  templateUrl: './smart-contract-development.component.html',
  styleUrls: ['./smart-contract-development.component.css'],
})
export class SmartContractDevelopmentComponent implements OnInit {
  title =
    'Smart Contract Development Company - Streamline your business processes with our smart contract development services | BlockchainX ';
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
        'As a smart contract development company, we can help you transform your business, program smart contracts for your company & bring the entire development process to deployment by incorporating the latest technological innovations that can unlock your company potential.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'smart contract development company, smart contract development,smart contract development services, smart contract application development, smart contract application development services ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Smart Contract Development Company - Streamline your business processes with our smart contract development services | BlockchainX ',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://blockchainx.tech/smart-contract-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'As a smart contract development company, we can help you transform your business, program smart contracts for your company & bring the entire development process to deployment by incorporating the latest technological innovations that can unlock your company potential.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/smart-contract-development.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://blockchainx.tech/smart-contract-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Smart Contract Development Company - Streamline your business processes with our smart contract development services | BlockchainX ',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'As a smart contract development company, we can help you transform your business, program smart contracts for your company & bring the entire development process to deployment by incorporating the latest technological innovations that can unlock your company potential.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/smart-contract-development.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://blockchainx.tech/smart-contract-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://blockchainx.tech/smart-contract-development'
    );
    this.doc.head.appendChild(link);
  }
}
