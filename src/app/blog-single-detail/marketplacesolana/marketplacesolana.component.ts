import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-marketplacesolana',
  templateUrl: './marketplacesolana.component.html',
  styleUrls: ['./marketplacesolana.component.css']
})
export class MarketplacesolanaComponent implements OnInit {

  title =
  'Solana NFT Marketplace - Develop Your Powerpacked NFT Platform With BlockchainX';
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
      'Solana blockchain network is considered efficient in terms of making quick transactions. Read through this blog, to understand how effective is its to build an NFT marketplace in Solana. Catch up here!',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'NFT Marketplace In Solana, Solana Blockchain, NFT platform on Solana, How to create an NFT marketplace in Solana',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Solana NFT Marketplace - Develop Your Powerpacked NFT Platform With BlockchainX',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/nft-marketplace-development-solana',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Solana blockchain network is considered efficient in terms of making quick transactions. Read through this blog, to understand how effective is its to build an NFT marketplace in Solana. Catch up here!',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/nft-marketplace-development-solana.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/nft-marketplace-development-solana',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Solana NFT Marketplace - Develop Your Powerpacked NFT Platform With BlockchainX',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Solana blockchain network is considered efficient in terms of making quick transactions. Read through this blog, to understand how effective is its to build an NFT marketplace in Solana. Catch up here!',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/nft-marketplace-development-solana.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/nft-marketplace-development-solana'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/nft-marketplace-development-solana'
  );
  this.doc.head.appendChild(link)
;
}

}
