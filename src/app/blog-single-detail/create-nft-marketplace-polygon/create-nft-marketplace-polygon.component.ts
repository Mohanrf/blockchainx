import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-create-nft-marketplace-polygon',
  templateUrl: './create-nft-marketplace-polygon.component.html',
  styleUrls: ['./create-nft-marketplace-polygon.component.css']
})
export class CreateNftMarketplacePolygonComponent implements OnInit {

  title =
  'From Concept to Launch: Building a Successful NFT Marketplace on Polygon';
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
      'Are you looking to create an NFT marketplace on the Polygon network? This comprehensive guide will take you step by step through the process of creating a successful platform, so you can unlock the potential of NFTs and build a successful marketplace.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'Create an NFT Marketplace on Polygon, How to  NFT Marketplace on Polygon, NFT Marketplace on Polygon, Polygon NFT Marketplac',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'From Concept to Launch: Building a Successful NFT Marketplace on Polygon',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/create-nft-marketplace-polygon',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Are you looking to create an NFT marketplace on the Polygon network? This comprehensive guide will take you step by step through the process of creating a successful platform, so you can unlock the potential of NFTs and build a successful marketplace.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://blockchainx.tech/assets-new/images/blog-new/create-nft-marketplace-polygon.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/create-nft-marketplace-polygon',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'From Concept to Launch: Building a Successful NFT Marketplace on Polygon',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Are you looking to create an NFT marketplace on the Polygon network? This comprehensive guide will take you step by step through the process of creating a successful platform, so you can unlock the potential of NFTs and build a successful marketplace.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://blockchainx.tech/assets-new/images/blog-new/create-nft-marketplace-polygon.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/create-nft-marketplace-polygon'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/create-nft-marketplace-polygon'
  );
  this.doc.head.appendChild(link);
}
}
