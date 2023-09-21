import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-everything-about-web3',
  templateUrl: './everything-about-web3.component.html',
  styleUrls: ['./everything-about-web3.component.css'],
})
export class EverythingAboutWeb3Component implements OnInit {
  title =
    'Everything you need to know about web3 - Is web3 the future of the internet? | BlockchainX Tech';
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
        'Web 3 is going to be the future, and Web technologies will continue to evolve. What confuses us is that some people think Web 3.0 is just blockchain and crypto/digital assets. Here in this blog, you will learn about Web 3, which is the next wave of new Web technologies. Read depth in detail.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'web3, internet, world wide web, web 1.0, web 2.0, decentralisation, blockchain, ethereum, bitcoin, cryptocurrency, NFTs, metaverse,, Decentralization, Decentralized Apps, Blockchain,future web3, Importance of Web 3.0,Use Cases of Web 3.0, Web3 the future of the internet',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Everything you need to know about web3 - Is web3 the future of the internet? | BlockchainX Tech',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/everything-you-need-to-know-about-web3',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Web 3 is going to be the future, and Web technologies will continue to evolve. What confuses us is that some people think Web 3.0 is just blockchain and crypto/digital assets. Here in this blog, you will learn about Web 3, which is the next wave of new Web technologies. Read depth in detail.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/web3-feature.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/everything-you-need-to-know-about-web3',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Everything you need to know about web3 - Is web3 the future of the internet? | BlockchainX Tech',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Web 3 is going to be the future, and Web technologies will continue to evolve. What confuses us is that some people think Web 3.0 is just blockchain and crypto/digital assets. Here in this blog, you will learn about Web 3, which is the next wave of new Web technologies. Read depth in detail.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/web3-feature.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/everything-you-need-to-know-about-web3'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/everything-you-need-to-know-about-web3'
    );
    this.doc.head.appendChild(link);
  }
}
