import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-corda-blockchain-development',
  templateUrl: './corda-blockchain-development.component.html',
  styleUrls: ['./corda-blockchain-development.component.css'],
})
export class CordaBlockchainDevelopmentComponent implements OnInit {
  title = 'R3 Corda Blockchain Development Company - BlockchainX';
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
        'R3 Corda is the perfect solution for businesses looking to rapidly deploy private blockchain applications. Corda Development lets you deploy enterprise apps with proven professional templates, seamless integration, and high security and privacy.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Corda development, Hire corda blockchain developer, R3 corda blockchain development company, Cordapp development, Corda blockchain development company, ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'R3 Corda Blockchain Development Company - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/corda-blockchain-development-services',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'R3 Corda is the perfect solution for businesses looking to rapidly deploy private blockchain applications. Corda Development lets you deploy enterprise apps with proven professional templates, seamless integration, and high security and privacy.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/corda-development-services.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/corda-blockchain-development-services',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'R3 Corda Blockchain Development Company - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'R3 Corda is the perfect solution for businesses looking to rapidly deploy private blockchain applications. Corda Development lets you deploy enterprise apps with proven professional templates, seamless integration, and high security and privacy.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/corda-development-services.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/corda-blockchain-development-services'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/corda-blockchain-development-services'
    );
    this.doc.head.appendChild(link);
  }
}
