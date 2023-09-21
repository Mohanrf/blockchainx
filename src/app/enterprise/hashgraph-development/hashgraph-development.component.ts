import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-hashgraph-development',
  templateUrl: './hashgraph-development.component.html',
  styleUrls: ['./hashgraph-development.component.css'],
})
export class HashgraphDevelopmentComponent implements OnInit {
  title =
    'Hashgraph development and technology - hedera hashgraph | BlockchainX';
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
        'With BlockchainX, hashgraph development services are no longer stressful. We provide trustworthy and reliable, time-efficient solutions to our customers.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: '',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Hashgraph development and technology - hedera hashgraph | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://blockchainx.tech/hashgraph-development-services',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'With BlockchainX, hashgraph development services are no longer stressful. We provide trustworthy and reliable, time-efficient solutions to our customers.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/hashgraph-development.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://blockchainx.tech/hashgraph-development-services',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Hashgraph development and technology - hedera hashgraph | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'With BlockchainX, hashgraph development services are no longer stressful. We provide trustworthy and reliable, time-efficient solutions to our customers.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/hashgraph-development.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://blockchainx.tech/hashgraph-development-services'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://blockchainx.tech/hashgraph-development-services'
    );
    this.doc.head.appendChild(link);
  }
}
