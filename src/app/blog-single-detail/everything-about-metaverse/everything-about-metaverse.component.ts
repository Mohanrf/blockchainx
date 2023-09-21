import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-everything-about-metaverse',
  templateUrl: './everything-about-metaverse.component.html',
  styleUrls: ['./everything-about-metaverse.component.css'],
})
export class EverythingAboutMetaverseComponent implements OnInit {
  title =
    'Major core differences between Blockchain and Distributed Ledger which Blockchain developers should know?';
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
        'Blockchain and Distributed Ledger are nearly the same. In other words Blockchain are the one form of Distributed Ledger Technology. Where Blockchain is a Blocks of Data, Distributed Ledger Technology',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Blockchain, Distributed Ledgers, Blockchain Technology, Cryptocurrency, Enterprise Technology, Cryptocurrency',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Major core differences between Blockchain and Distributed Ledger which Blockchain developers should know?',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/know-everything-about-blockchain-metaverse',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Blockchain and Distributed Ledger are nearly the same. In other words Blockchain are the one form of Distributed Ledger Technology. Where Blockchain is a Blocks of Data, Distributed Ledger Technology',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/metaverse.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/know-everything-about-blockchain-metaverse',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Major core differences between Blockchain and Distributed Ledger which Blockchain developers should know?',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Blockchain and Distributed Ledger are nearly the same. In other words Blockchain are the one form of Distributed Ledger Technology. Where Blockchain is a Blocks of Data, Distributed Ledger Technology',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/metaverse.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/know-everything-about-blockchain-metaverse'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/know-everything-about-blockchain-metaverse'
    );
    this.doc.head.appendChild(link);
  }
}
