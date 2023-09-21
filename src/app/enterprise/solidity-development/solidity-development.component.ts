import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-solidity-development',
  templateUrl: './solidity-development.component.html',
  styleUrls: ['./solidity-development.component.css'],
})
export class SolidityDevelopmentComponent implements OnInit {
  title =
    'Hire an expert solidity development team - Solidity Development Services | BlockchainX';
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
        'Hire Solidity experts from BlockchainX for your customized full-stack Solidity development projects. Solidity is one of the foremost and most popular languages ​​for creating smart contracts for blockchain. We can provide you with the best solutions in the shortest possible time.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'solidity development company, solidity development services, solidity developer  ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Solidity development - solidity solutions | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/hire-solidity-developers',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Hire Solidity experts from BlockchainX for your customized full-stack Solidity development projects. Solidity is one of the foremost and most popular languages ​​for creating smart contracts for blockchain. We can provide you with the best solutions in the shortest possible time.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/solidity-development.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/hire-solidity-developers',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Hire an expert solidity development team - Solidity Development Services | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Hire Solidity experts from BlockchainX for your customized full-stack Solidity development projects. Solidity is one of the foremost and most popular languages ​​for creating smart contracts for blockchain. We can provide you with the best solutions in the shortest possible time.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/solidity-development.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/hire-solidity-developers'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/hire-solidity-developers'
    );
    this.doc.head.appendChild(link);
  }
}
