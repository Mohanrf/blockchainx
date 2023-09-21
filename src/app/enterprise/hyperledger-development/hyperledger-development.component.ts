import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-hyperledger-development',
  templateUrl: './hyperledger-development.component.html',
  styleUrls: ['./hyperledger-development.component.css'],
})
export class HyperledgerDevelopmentComponent implements OnInit {
  title =
    'Hyperledger Development Company - Build cutting-edge blockchain solutions with our Hyperledger development services | BlockchainX ';
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
        'Get the best hyperledger development services to infuse your company with the perfect blend of innovation & technological advancement. BlockchainX has a team of hyperledger developers who work together to create advanced enterprise blockchain applications in a secure & timely manner.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Hyperledger development company, Hyperledger development services,Hyperledger Blockchain development company, hyperledger application development',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Hyperledger Development Company - Build cutting-edge blockchain solutions with our Hyperledger development services | BlockchainX ',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://blockchainx.tech/hire-solidity-developers',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Get the best hyperledger development services to infuse your company with the perfect blend of innovation & technological advancement. BlockchainX has a team of hyperledger developers who work together to create advanced enterprise blockchain applications in a secure & timely manner.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/hyperledger-development.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://blockchainx.tech/hire-solidity-developers',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Hyperledger Development Company - Build cutting-edge blockchain solutions with our Hyperledger development services | BlockchainX ',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Get the best hyperledger development services to infuse your company with the perfect blend of innovation & technological advancement. BlockchainX has a team of hyperledger developers who work together to create advanced enterprise blockchain applications in a secure & timely manner.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/hyperledger-development.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://blockchainx.tech/hire-solidity-developers'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://blockchainx.tech/hire-solidity-developers'
    );
    this.doc.head.appendChild(link);
  }
}
