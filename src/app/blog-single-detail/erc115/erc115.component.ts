import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-erc115',
  templateUrl: './erc115.component.html',
  styleUrls: ['./erc115.component.css'],
})
export class Erc115Component implements OnInit {
  title = ' A detailed look at the ERC-1155 Token standard';
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
        'ERC-1155 has emerged as the most recent NFT standard and is promising significant advancements. This blog will explain why developers prefer the ERC-1155 token standard and how you can get ready to start creating ERC-1155 NFTs with the ERC-1155 token standard.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'erc 1155 nft, erc 1155 standard, erc 1155 token, create erc 1155',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: ' A detailed look at the ERC-1155 Token standard',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/erc1155-token-standard',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'ERC-1155 has emerged as the most recent NFT standard and is promising significant advancements. This blog will explain why developers prefer the ERC-1155 token standard and how you can get ready to start creating ERC-1155 NFTs with the ERC-1155 token standard.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/erc-1155.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/erc1155-token-standard',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: ' A detailed look at the ERC-1155 Token standard',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'ERC-1155 has emerged as the most recent NFT standard and is promising significant advancements. This blog will explain why developers prefer the ERC-1155 token standard and how you can get ready to start creating ERC-1155 NFTs with the ERC-1155 token standard.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/erc-1155.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/erc1155-token-standard'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/erc1155-token-standard'
    );
    this.doc.head.appendChild(link);
  }
}
