import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-cryptocurrency-launchpad',
  templateUrl: './cryptocurrency-launchpad.component.html',
  styleUrls: ['./cryptocurrency-launchpad.component.css'],
})
export class CryptocurrencyLaunchpadComponent implements OnInit {
  title =
    'Crypto launchpad development - Enhance your crypto success with a leading launchpad development company | BlockchainX';

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
        'Create a feature-rich and potent launchpad to increase the market visibility of blockchain projects. Our experts analyse your needs & create a launchpad that meets your business objectives.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'launchpad development company, cryptocurrency launchpad development, crypto launchpad development, whitelabel launchpad solution, crypto launchpad development services, white label crypto launchpad development company     ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Crypto launchpad development - Enhance your crypto success with a leading launchpad development company | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/white-label-launchpad-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Create a feature-rich and potent launchpad to increase the market visibility of blockchain projects. Our experts analyse your needs & create a launchpad that meets your business objectives.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/og/crypto-launchpad-development.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/white-label-launchpad-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Crypto launchpad development - Enhance your crypto success with a leading launchpad development company | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Create a feature-rich and potent launchpad to increase the market visibility of blockchain projects. Our experts analyse your needs & create a launchpad that meets your business objectives.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/og/crypto-launchpad-development.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/white-label-launchpad-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/white-label-launchpad-development'
    );
    this.doc.head.appendChild(link);
  }
}
