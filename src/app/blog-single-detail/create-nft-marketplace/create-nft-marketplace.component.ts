import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-create-nft-marketplace',
  templateUrl: './create-nft-marketplace.component.html',
  styleUrls: ['./create-nft-marketplace.component.css'],
})
export class CreateNftMarketplaceComponent implements OnInit {
  title = 'How to Create your own NFT Marketplace in 2023';
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
        'The time has come to create an NFT marketplace. People spend billions of dollars on fancy digital assets, so why not turn it into a business? This blog is a great place to start if you want to learn how to build an NFT marketplace.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'create nft marketplace, build nft marketplace, nft marketplace app development, nft marketplace development services, white label nft marketplace development, nft marketplace development company, nft marketplace development, create your own nft marketplace, create an nft marketplace, build your own nft marketplace, whitelabel nft marketplace development, nft marketplace development services company, white label nft marketplace development company, nft marketplace development platform, polygon nft marketplace development',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'How to Create your own NFT Marketplace in 2023',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/how-to-create-your-own-nft-marketplace-in-2023',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'The time has come to create an NFT marketplace. People spend billions of dollars on fancy digital assets, so why not turn it into a business? This blog is a great place to start if you want to learn how to build an NFT marketplace.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/how-to-create-your-own-nft-marketplace-2023.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/how-to-create-your-own-nft-marketplace-in-2023',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'How to Create your own NFT Marketplace in 2023',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'The time has come to create an NFT marketplace. People spend billions of dollars on fancy digital assets, so why not turn it into a business? This blog is a great place to start if you want to learn how to build an NFT marketplace.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/how-to-create-your-own-nft-marketplace-2023.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/how-to-create-your-own-nft-marketplace-in-2023'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/how-to-create-your-own-nft-marketplace-in-2023'
    );
    this.doc.head.appendChild(link);
  }
}
