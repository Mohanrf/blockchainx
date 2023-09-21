import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-future-of-nft-applications',
  templateUrl: './future-of-nft-applications.component.html',
  styleUrls: ['./future-of-nft-applications.component.css'],
})
export class FutureOfNftApplicationsComponent implements OnInit {
  title =
    'NFTs, the sensation that overcame the the stigma of crypto “Hype”: Past, Present, and Future';
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
        'Anyone who knows about NFTs and the world of blockchain will be eager to know about the future of nft. In this article, you can understand the possible future for nft and the challenges of the non fungible token. Read on to know more.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'What are NFTs, applications of NFT, Future of NFT, challenges of NFT, Applications and Challenges of NFT',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'NFTs, the sensation that overcame the the stigma of crypto “Hype”: Past, Present, and Future',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/future-nft-applications-challenges',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Anyone who knows about NFTs and the world of blockchain will be eager to know about the future of nft. In this article, you can understand the possible future for nft and the challenges of the non fungible token. Read on to know more.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/future-nft-applications-challenges.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/future-nft-applications-challenges',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'NFTs, the sensation that overcame the the stigma of crypto “Hype”: Past, Present, and Future',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Anyone who knows about NFTs and the world of blockchain will be eager to know about the future of nft. In this article, you can understand the possible future for nft and the challenges of the non fungible token. Read on to know more.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/future-nft-applications-challenges.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/future-nft-applications-challenges'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/future-nft-applications-challenges'
    );
    this.doc.head.appendChild(link);
  }
}
