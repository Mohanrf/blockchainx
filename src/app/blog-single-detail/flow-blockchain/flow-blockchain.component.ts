import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-flow-blockchain',
  templateUrl: './flow-blockchain.component.html',
  styleUrls: ['./flow-blockchain.component.css'],
})
export class FlowBlockchainComponent implements OnInit {
  title = 'Flow Blockchain Vs. Ethereum. Which Is Better For NFT Development?';
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
        'Those who know what NFTs are will have a better understanding of the importance of the Ethereum blockchain in the space. Flow blockchain was created to meet business needs after well-documented scalability issues with Ethereum. We are going to deep dive into the comparison between Ethereum and Flow for developing NFTs. We hope this article helps you understand which NFT development platform is best suited for you.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Flow blockchain and Ethereum for NFT Development,Flow Blockchain vs Ethereum, Blockchain for nft development, Flow vs Ethereum',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Flow Blockchain Vs. Ethereum. Which Is Better For NFT Development?',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/flow-blockchain-and-ethereum',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Those who know what NFTs are will have a better understanding of the importance of the Ethereum blockchain in the space. Flow blockchain was created to meet business needs after well-documented scalability issues with Ethereum. We are going to deep dive into the comparison between Ethereum and Flow for developing NFTs. We hope this article helps you understand which NFT development platform is best suited for you.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/flow-blockchain-ethereum.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/flow-blockchain-and-ethereum',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Flow Blockchain Vs. Ethereum. Which Is Better For NFT Development?',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Those who know what NFTs are will have a better understanding of the importance of the Ethereum blockchain in the space. Flow blockchain was created to meet business needs after well-documented scalability issues with Ethereum. We are going to deep dive into the comparison between Ethereum and Flow for developing NFTs. We hope this article helps you understand which NFT development platform is best suited for you.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/flow-blockchain-ethereum.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/flow-blockchain-and-ethereum'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/flow-blockchain-and-ethereum'
    );
    this.doc.head.appendChild(link);
  }
}
