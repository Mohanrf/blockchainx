import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-non-fungible',
  templateUrl: './non-fungible.component.html',
  styleUrls: ['./non-fungible.component.css'],
})
export class NonFungibleComponent implements OnInit {
  title =
    'Digitalize your Physical Assets with NFT Development Company - NFT Development Services | BlockchainX';
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
        'BlockchainX is a market-leading NFT development company with the right teams and masterminds to accelerate your next project. Our NFT development services offer end-to-end services to tokenize your digital collectibles.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'nft development, nft development company, nft development services, nft token development, top nft development company ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Digitalize your Physical Assets with NFT Development Company - NFT Development Services | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/non-fungible-token-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'BlockchainX is a market-leading NFT development company with the right teams and masterminds to accelerate your next project. Our NFT development services offer end-to-end services to tokenize your digital collectibles.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/nft-development-og.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/non-fungible-token-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Digitalize your Physical Assets with NFT Development Company - NFT Development Services | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'BlockchainX is a market-leading NFT development company with the right teams and masterminds to accelerate your next project. Our NFT development services offer end-to-end services to tokenize your digital collectibles.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/nft-development-og.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/non-fungible-token-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/non-fungible-token-development'
    );
    this.doc.head.appendChild(link);
  }
}
