import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-everything-about-substrate',
  templateUrl: './everything-about-substrate.component.html',
  styleUrls: ['./everything-about-substrate.component.css'],
})
export class EverythingAboutSubstrateComponent implements OnInit {
  title = 'Know everything about Substrate';
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
        'The substrate is a framework for Building dApps and custom blockchains. Substrate enables the creation of a scalable blockchain with Polkadot compatibility. Read the blog to learn more.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Substrate blockchain framework, Substrate framework, Substrate-based blockchains, Building a custom blockchain with Substrate, Substrate and Polkadot, What is Substrate?',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Know everything about Substrate',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/know-everything-about-substrate',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'The substrate is a framework for Building dApps and custom blockchains. Substrate enables the creation of a scalable blockchain with Polkadot compatibility. Read the blog to learn more.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/metaverse.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/know-everything-about-substrate',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Know everything about Substrate',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'The substrate is a framework for Building dApps and custom blockchains. Substrate enables the creation of a scalable blockchain with Polkadot compatibility. Read the blog to learn more.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/metaverse.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/know-everything-about-substrate'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/know-everything-about-substrate'
    );
    this.doc.head.appendChild(link);
  }
}
