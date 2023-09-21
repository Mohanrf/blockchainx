import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-enduring-technologies',
  templateUrl: './enduring-technologies.component.html',
  styleUrls: ['./enduring-technologies.component.css'],
})
export class EnduringTechnologiesComponent implements OnInit {
  title = '7 Top Technologies For Metaverse - Reshaping The Creative Existence';
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
        'The world of possibilities is now open to access with metaverse. The best part of its evolution is the abilities of the tools that keep advancing and supporting it through. This blog will make you throw a straight drive on the Top 7 Technologies for metaverse that are revitalizing its abilities.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        '7 top technologies for metaverse,metaverse development tools,top metaverse projects,top metaverse crypto technologies,Web3 technology',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        '7 Top Technologies For Metaverse - Reshaping The Creative Existence',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/7-enduring-technologies-for-metaverse',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'The world of possibilities is now open to access with metaverse. The best part of its evolution is the abilities of the tools that keep advancing and supporting it through. This blog will make you throw a straight drive on the Top 7 Technologies for metaverse that are revitalizing its abilities.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/Metaverse-Development-tools.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/7-enduring-technologies-for-metaverse',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        '7 Top Technologies For Metaverse - Reshaping The Creative Existence',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'The world of possibilities is now open to access with metaverse. The best part of its evolution is the abilities of the tools that keep advancing and supporting it through. This blog will make you throw a straight drive on the Top 7 Technologies for metaverse that are revitalizing its abilities.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/Metaverse-Development-tools.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/7-enduring-technologies-for-metaverse'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/7-enduring-technologies-for-metaverse'
    );
    this.doc.head.appendChild(link);
  }
}
