import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../shared/canonical.service';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css'],
})
export class CaseStudiesComponent implements OnInit {
  title = 'Case studies and success stories - BlockchainX';
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
        'Check out our top blockchain projects and how we ensure client satisfaction by viewing our case studies. A complete journey from goals to successes.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: '',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Case studies and success stories - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/case-studies',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Check out our top blockchain projects and how we ensure client satisfaction by viewing our case studies. A complete journey from goals to successes.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/case-studies',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Case studies and success stories - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Check out our top blockchain projects and how we ensure client satisfaction by viewing our case studies. A complete journey from goals to successes.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/case-studies'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', '');
    this.doc.head.appendChild(link);
  }
}
