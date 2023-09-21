import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-cardano-blockchain-development',
  templateUrl: './cardano-blockchain-development.component.html',
  styleUrls: ['./cardano-blockchain-development.component.css'],
})
export class CardanoBlockchainDevelopmentComponent implements OnInit {
  title = 'Hire a leading Cardano Blockchain Development Company';
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
        'Build highly scalable and interoperable blockchain solutions with ourCardano blockchain development services. Make your project eco-friendly with the third-gen blockchain.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Cardano Blockchain Development, Cardano Blockchain Development Company, Cardano Blockchain Development Services',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Hire a leading Cardano Blockchain Development Company',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/cardano-ada-blockchain-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Build highly scalable and interoperable blockchain solutions with ourCardano blockchain development services. Make your project eco-friendly with the third-gen blockchain.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/cardano-blockchain-development.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/cardano-ada-blockchain-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Hire a leading Cardano Blockchain Development Company',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Build highly scalable and interoperable blockchain solutions with ourCardano blockchain development services. Make your project eco-friendly with the third-gen blockchain.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/cardano-blockchain-development.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/cardano-ada-blockchain-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/cardano-ada-blockchain-development'
    );
    this.doc.head.appendChild(link);
  }
}
