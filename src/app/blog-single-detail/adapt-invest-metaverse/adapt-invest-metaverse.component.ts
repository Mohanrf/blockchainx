import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-adapt-invest-metaverse',
  templateUrl: './adapt-invest-metaverse.component.html',
  styleUrls: ['./adapt-invest-metaverse.component.css']
})
export class AdaptInvestMetaverseComponent implements OnInit {

  title =
    'Adapt, invest, and explore the Metaverse - A shared Virtual Environment | BlockchainX';
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
        'The metaverse resembles an open and shared virtual environment that enables users to explore and engage with various virtual spaces. It has emerged as one of the most hotly debated concepts in the tech world.Why is Metaverse getting such a lot of attention?  To know the answer, read this blog .',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'key feature of metaverse, virtual environment of metaverse, future of metaverse, metaverse historical events, cryptocurrency and their metaverse, metaverse, virtual world, decentralised cryptocurrency wallets',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Adapt, invest, and explore the Metaverse - A shared Virtual Environment | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/adapt-invest-explore-metaverse',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'The metaverse resembles an open and shared virtual environment that enables users to explore and engage with various virtual spaces. It has emerged as one of the most hotly debated concepts in the tech world.Why is Metaverse getting such a lot of attention?  To know the answer, read this blog .',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/Adapt-invest-explore-metaverse.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/adapt-invest-explore-metaverse',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Adapt, invest, and explore the Metaverse - A shared Virtual Environment | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'The metaverse resembles an open and shared virtual environment that enables users to explore and engage with various virtual spaces. It has emerged as one of the most hotly debated concepts in the tech world.Why is Metaverse getting such a lot of attention?  To know the answer, read this blog .',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/Adapt-invest-explore-metaverse.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/adapt-invest-explore-metaverse'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/adapt-invest-explore-metaverse'
    );
    this.doc.head.appendChild(link)
;
  }

}
