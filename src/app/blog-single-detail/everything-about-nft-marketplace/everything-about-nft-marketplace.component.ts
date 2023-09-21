import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-everything-about-nft-marketplace',
  templateUrl: './everything-about-nft-marketplace.component.html',
  styleUrls: ['./everything-about-nft-marketplace.component.css'],
})
export class EverythingAboutNftMarketplaceComponent implements OnInit {
  title = 'NFT Marketplace: Everything You Need To Know';
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
        'Many people wonder, why do you need an NFT marketplace, and who is it for? In this blog, you’ll learn the possibilities of these platforms and how to create an NFT marketplace. Read on to know more.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'best NFT marketplace, NFT marketplace work, start NFT Marketplace Development, Building an NFT marketplace platform, develop NFT Marketplace',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'NFT Marketplace: Everything You Need To Know',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/nft-marketplace-everything-you-need-to-know',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Many people wonder, why do you need an NFT marketplace, and who is it for? In this blog, you’ll learn the possibilities of these platforms and how to create an NFT marketplace. Read on to know more.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/nft-market-place.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/nft-marketplace-everything-you-need-to-know',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'NFT Marketplace: Everything You Need To Know',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Many people wonder, why do you need an NFT marketplace, and who is it for? In this blog, you’ll learn the possibilities of these platforms and how to create an NFT marketplace. Read on to know more.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/nft-market-place.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/nft-marketplace-everything-you-need-to-know'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/nft-marketplace-everything-you-need-to-know'
    );
    this.doc.head.appendChild(link);
  }
}
