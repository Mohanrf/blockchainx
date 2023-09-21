import { Component, Inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-nft-development-company',
  templateUrl: './nft-development-company.component.html',
  styleUrls: ['./nft-development-company.component.css'],
})
export class NftMarketplaceDevelopment implements OnInit {
  title = 'NFT Marketplace Development Company';
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
        'Launching an NFT marketplace for your next project now just takes days. Hire a leading NFT marketplace development company with hands-on experience in building scalable NFT products. Kickstart your NFT project today with our services.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'NFT MarketPlace Development Company, NFT marketplace development, Create NFT Marketplace, Non-Fungible Token Marketplaces, Non-Fungible Token Marketplace Development Services, NFT Software Development Services & Solution Provider,White label NFT Marketplace Platform Development,White label NFT Marketplace Platform',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'NFT Marketplace Development Company',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/nft-marketplace-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Launching an NFT marketplace for your next project now just takes days. Hire a leading NFT marketplace development company with hands-on experience in building scalable NFT products. Kickstart your NFT project today with our services.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/nft-development.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/nft-marketplace-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'NFT Marketplace Development Company',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Launching an NFT marketplace for your next project now just takes days. Hire a leading NFT marketplace development company with hands-on experience in building scalable NFT products. Kickstart your NFT project today with our services.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/nft-development.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/nft-marketplace-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/nft-marketplace-development'
    );
    this.doc.head.appendChild(link);
  }

  nftOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    dots: false,
    autoHeight: true,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },

      1024: {
        items: 3,
      },

      1366: {
        items: 3,
      },
    },
    nav: false,
  };
  fieldOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    dots: false,
    autoHeight: true,
    margin: 25,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },

      1024: {
        items: 3,
      },

      1366: {
        items: 3,
      },
    },
    nav: false,
  };
}
