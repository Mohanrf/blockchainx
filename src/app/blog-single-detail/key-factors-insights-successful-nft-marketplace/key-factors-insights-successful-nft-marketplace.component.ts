import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-key-factors-insights-successful-nft-marketplace',
  templateUrl: './key-factors-insights-successful-nft-marketplace.component.html',
  styleUrls: ['./key-factors-insights-successful-nft-marketplace.component.css']
})
export class KeyFactorsInsightsSuccessfulNftMarketplaceComponent implements OnInit {

  title =
  'Factors you need to know to have a successful NFT marketplace';
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
      'Explore the essential factors that contribute to the success of an NFT marketplace and gain valuable insights to build and thrive in an evolving world.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'how to create your own nft, how to create and sell nfts, how to create nft marketplace, how to build an nft marketplace, how to make nft marketplace, how to develop nft marketplace',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Factors you need to know to have a successful NFT marketplace',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/key-factors-insights-successful-nft-marketplace',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Explore the essential factors that contribute to the success of an NFT marketplace and gain valuable insights to build and thrive in an evolving world.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'http://blockchainx.tech/assets-new/images/blog-new/developed-successful-nft-marketplace.png',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/key-factors-insights-successful-nft-marketplace',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Factors you need to know to have a successful NFT marketplace',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Explore the essential factors that contribute to the success of an NFT marketplace and gain valuable insights to build and thrive in an evolving world.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'http://blockchainx.tech/assets-new/images/blog-new/developed-successful-nft-marketplace.png',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/key-factors-insights-successful-nft-marketplace'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/key-factors-insights-successful-nft-marketplace'
  );
  this.doc.head.appendChild(link)
;
}

}
