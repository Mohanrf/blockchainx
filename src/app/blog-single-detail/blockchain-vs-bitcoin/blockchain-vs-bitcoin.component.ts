import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-blockchain-vs-bitcoin',
  templateUrl: './blockchain-vs-bitcoin.component.html',
  styleUrls: ['./blockchain-vs-bitcoin.component.css']
})
export class BlockchainVsBitcoinComponent implements OnInit {

  title =
    'Difference Between Blockchain and Bitcoin for Business | BlockchainX';
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
        'Bitcoin VS Blockchain. Are Blockchain and Bitcoin the same? The answer is No. Bitcoin is a cryptocurrency where its transaction ledger are stored using Blockchain Technology.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Blockchain vs Bitcoin, bitcoin vs blockchain, what is blockchain, what is bitcoin, blockchain development company',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Difference Between Blockchain and Bitcoin for Business | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/blockchain-vs-bitcoin',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Bitcoin VS Blockchain. Are Blockchain and Bitcoin the same? The answer is No. Bitcoin is a cryptocurrency where its transaction ledger are stored using Blockchain Technology.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/blockchain.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/blockchain-vs-bitcoin',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Difference Between Blockchain and Bitcoin for Business | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Bitcoin VS Blockchain. Are Blockchain and Bitcoin the same? The answer is No. Bitcoin is a cryptocurrency where its transaction ledger are stored using Blockchain Technology.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/blockchain.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/blockchain-vs-bitcoin'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/blockchain-vs-bitcoin'
    );
    this.doc.head.appendChild(link)
;
  }

}
