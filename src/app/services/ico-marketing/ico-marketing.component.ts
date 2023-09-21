import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-ico-marketing',
  templateUrl: './ico-marketing.component.html',
  styleUrls: ['./ico-marketing.component.css'],
})
export class IcoMarketingComponent implements OnInit {
  title = 'Reach the Global Audience With ICO Marketing Services';
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
        'Today, marketing is demanded in all sectors, and crypto cannot escape that scene. Initial coin offering is the first step to captivating funding for your business. Our ICO Marketing service is a round-the-market service stressing every nuance of the project to bring in potential investors.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Ico marketing,Ico marketing agency,Ico marketing services,Ico marketing company,Ico Marketing companies,Ico marketing strategy,Ico marketing agencies',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Reach the Global Audience With ICO Marketing Services',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/ico-marketing-agency',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Today, marketing is demanded in all sectors, and crypto cannot escape that scene. Initial coin offering is the first step to captivating funding for your business. Our ICO Marketing service is a round-the-market service stressing every nuance of the project to bring in potential investors.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/ico-marketing.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/ico-marketing-agency',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Reach the Global Audience With ICO Marketing Services',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Today, marketing is demanded in all sectors, and crypto cannot escape that scene. Initial coin offering is the first step to captivating funding for your business. Our ICO Marketing service is a round-the-market service stressing every nuance of the project to bring in potential investors.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/ico-marketing.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/ico-marketing-agency'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/ico-marketing-agency'
    );
    this.doc.head.appendChild(link);
  }
}
