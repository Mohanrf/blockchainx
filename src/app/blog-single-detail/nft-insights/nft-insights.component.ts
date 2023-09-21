import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-nft-insights',
  templateUrl: './nft-insights.component.html',
  styleUrls: ['./nft-insights.component.css'],
})
export class NftInsightsComponent implements OnInit {
  title =
    'The Top Nine Insightful Things to Consider Before Starting with NFT Marketplace development';
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
        "Would you like to start developing your NFT marketplace? Before you launch it, consider these insightful things. This will help you in your NFT Marketplace development quickly and provide high-quality solutions. Now let's dive deeper to explore tem.",
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Top 9 nft marketplace  insights, Nft marketplace insights, What is nft marketplace, Explain nft marketplace, 9 use cases of  nft marketplace',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'The Top Nine Insightful Things to Consider Before Starting with NFT Marketplace development',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/nft-market-place-insights',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        "Would you like to start developing your NFT marketplace? Before you launch it, consider these insightful things. This will help you in your NFT Marketplace development quickly and provide high-quality solutions. Now let's dive deeper to explore tem.",
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://blockchainx.tech/assets-new/images/blog/nine-nft.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/nft-market-place-insights',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'The Top Nine Insightful Things to Consider Before Starting with NFT Marketplace development',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        "Would you like to start developing your NFT marketplace? Before you launch it, consider these insightful things. This will help you in your NFT Marketplace development quickly and provide high-quality solutions. Now let's dive deeper to explore tem.",
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://blockchainx.tech/assets-new/images/blog/nine-nft.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/nft-market-place-insights'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/nft-market-place-insights'
    );
    this.doc.head.appendChild(link);
  }
}
