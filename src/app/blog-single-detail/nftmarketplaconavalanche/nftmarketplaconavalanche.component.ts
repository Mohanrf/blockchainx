import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-nftmarketplaconavalanche',
  templateUrl: './nftmarketplaconavalanche.component.html',
  styleUrls: ['./nftmarketplaconavalanche.component.css']
})
export class NftmarketplaconavalancheComponent implements OnInit {

  title =
    'NFT Marketplace - Stiff and Sturdy NFT Platform On Avalanche Network';
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
        'Are you a creator with ideas blowing the world? Here with BlockchainX and by availing our services you can develop your Creative economy and erect your community in the web3 market with our NFT marketplace on Avalanche development. Customized solution based on your needs and business requirement, contact now to grab more insights.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Cold wallet development, Cold wallet integration with web apps',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'NFT Marketplace - Stiff and Sturdy NFT Platform On Avalanche Network',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/create-your-nft-marketplace-on-avalanche',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Are you a creator with ideas blowing the world? Here with BlockchainX and by availing our services you can develop your Creative economy and erect your community in the web3 market with our NFT marketplace on Avalanche development. Customized solution based on your needs and business requirement, contact now to grab more insights.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/create-your-nft-marketplace-on-avalanche/nft-marketplace-on-avalanche.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/create-your-nft-marketplace-on-avalanche',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'NFT Marketplace - Stiff and Sturdy NFT Platform On Avalanche Network',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Are you a creator with ideas blowing the world? Here with BlockchainX and by availing our services you can develop your Creative economy and erect your community in the web3 market with our NFT marketplace on Avalanche development. Customized solution based on your needs and business requirement, contact now to grab more insights.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/create-your-nft-marketplace-on-avalanche/nft-marketplace-on-avalanche.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/create-your-nft-marketplace-on-avalanche'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/create-your-nft-marketplace-on-avalanche'
    );
    this.doc.head.appendChild(link)
;
  }

}
