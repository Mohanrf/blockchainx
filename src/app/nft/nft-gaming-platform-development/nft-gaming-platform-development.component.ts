import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-nft-gaming-platform-development',
  templateUrl: './nft-gaming-platform-development.component.html',
  styleUrls: ['./nft-gaming-platform-development.component.css'],
})
export class NftGamingPlatformDevelopmentComponent implements OnInit {
  title =
    'Nft gaming development company - Experience the future of gaming with our NFT gaming platform development - BlockchainX';
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
        'Create your own NFT gaming platform to turn your dreamy ideas into a profitable business. Our innovative blockchain expertise offers the most dependable solutions for your NFT gaming platform development.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'nft gaming development company, nft gaming platform development, nft game development, nft gaming platform development company, nft gaming platform development services, nft game developer ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Nft gaming development company - Experience the future of gaming with our NFT gaming platform development - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/nft-gaming-platform-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Create your own NFT gaming platform to turn your dreamy ideas into a profitable business. Our innovative blockchain expertise offers the most dependable solutions for your NFT gaming platform development. ',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/nft-gaming.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/nft-gaming-platform-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Nft gaming development company - Experience the future of gaming with our NFT gaming platform development - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Create your own NFT gaming platform to turn your dreamy ideas into a profitable business. Our innovative blockchain expertise offers the most dependable solutions for your NFT gaming platform development. ',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/nft-gaming.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/nft-gaming-platform-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/nft-gaming-platform-development'
    );
    this.doc.head.appendChild(link);
  }
}
