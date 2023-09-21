import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-decentralized-identity-in-blockchain',
  templateUrl: './decentralized-identity-in-blockchain.component.html',
  styleUrls: ['./decentralized-identity-in-blockchain.component.css']
})
export class DecentralizedIdentityInBlockchainComponent implements OnInit {

  title =
    'Decentralized identities pave the way for better security in the digital world';
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
        'The innovation of decentralized identities cuts out all middlemen and makes the digital identity management process easier than ever. Decentralized identity works using blockchain to offer sovereign control over digital identities to users themselves. Blockchain ensures that users control their digital identities without governments, big tech companies, or other commercial entities acting as intermediaries.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'what is decentralized identity, decentralized identity in blockchain, decentralized identity explained, decentralized identity fundamentals, decentralized identity using blockchain',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Decentralized identities pave the way for better security in the digital world',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/decentralized-identities-beginners-guide',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'The innovation of decentralized identities cuts out all middlemen and makes the digital identity management process easier than ever. Decentralized identity works using blockchain to offer sovereign control over digital identities to users themselves. Blockchain ensures that users control their digital identities without governments, big tech companies, or other commercial entities acting as intermediaries.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://blockchainx.tech/assets-new/images/blog-new/decentralized-identities-blockchain/decentralized-identities.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/decentralized-identities-beginners-guide',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Decentralized identities pave the way for better security in the digital world',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'The innovation of decentralized identities cuts out all middlemen and makes the digital identity management process easier than ever. Decentralized identity works using blockchain to offer sovereign control over digital identities to users themselves. Blockchain ensures that users control their digital identities without governments, big tech companies, or other commercial entities acting as intermediaries.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://blockchainx.tech/assets-new/images/blog-new/decentralized-identities-blockchain/decentralized-identities.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/decentralized-identities-beginners-guide'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/decentralized-identities-beginners-guide'
    );
    this.doc.head.appendChild(link)
;
  }

}
