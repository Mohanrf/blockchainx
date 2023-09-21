import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-defi-crypto-wallet-software',
  templateUrl: './defi-crypto-wallet-software.component.html',
  styleUrls: ['./defi-crypto-wallet-software.component.css'],
})
export class DefiCryptoWalletSoftwareComponent implements OnInit {
  title =
    'Cryptocurrency wallet development - Your partner for secure and innovative crypto wallet development | BlockchainX';
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
        'Keep your digital assets in a highly secure, technically advanced blockchain-based cryptocurrency wallet. With our cryptocurrency wallet development services, you can start building the best & most efficient wallet system.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'build your own bitcoin wallet, cryptocurrency wallet development, create your own bitcoin wallet',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'cryptocurrency wallet development company, cryptocurrency wallet development service, crypto wallet development, crypto wallet app development, crypto wallet app development company, crypto wallet development solutions, crypto wallet consulting solutions ',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/cryptocurrency-wallet-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Keep your digital assets in a highly secure, technically advanced blockchain-based cryptocurrency wallet. With our cryptocurrency wallet development services, you can start building the best & most efficient wallet system.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/og/cryptocurrency-wallet-development-company.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/cryptocurrency-wallet-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Cryptocurrency wallet development - Your partner for secure and innovative crypto wallet development | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Keep your digital assets in a highly secure, technically advanced blockchain-based cryptocurrency wallet. With our cryptocurrency wallet development services, you can start building the best & most efficient wallet system.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/og/cryptocurrency-wallet-development-company.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/cryptocurrency-wallet-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/cryptocurrency-wallet-development'
    );
    this.doc.head.appendChild(link);
  }
}
