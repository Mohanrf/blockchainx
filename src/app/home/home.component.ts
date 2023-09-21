import { Component, Inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../shared/canonical.service';

declare var AOS: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title =
    'Blockchain Development Company | End-to-end Blockchain Development Services - BlockchainX';

  menulist = [
    'Real Estate',
    'Travel',
    'Sports',
    'Social Networking',
    'Fintech',
    'Media & Entertainment',
    'Logistics & Distribution',
    'Healthcare Solutions',
  ];
  selectedlisted: any;

  constructor(
    config: NgbAccordionConfig,
    private viewportScroller: ViewportScroller,
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
    @Inject(DOCUMENT) private doc: Document
  ) {
    config.closeOthers = true;
    config.type = 'info';
  }
  blogPost: OwlOptions = {
    loop: true,
    margin: 30,
    autoplay: true,
    center: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1600: {
        items: 3,
        margin: 40,
      },
    },
  };

  ngOnInit(): void {
    AOS.init();
    this.selectedlisted = this.menulist[0];
    [CUSTOM_ELEMENTS_SCHEMA];
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content:
        'BlockchainX is a top notch blockchain development company with a competent team of the best blockchain developers, R&D department and blockchain consultants. We deliver end-to-end blockchain development services to start-ups, businesses, and entrepreneurs using blockchain frameworks & customizable blockchain solutions.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Blockchain Development, Blockchain Development Company, Blockchain Development Services,Blockchain App Development Company,Blockchain App Development Services, Blockchain Software Development,Blockchain Software Development Company, Blockchain Development Company,Blockchain Application Development Company',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Blockchain Development Company | End-to-end Blockchain Development Services - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'BlockchainX is a top notch blockchain development company with a competent team of the best blockchain developers, R&D department and blockchain consultants. We deliver end-to-end blockchain development services to start-ups, businesses, and entrepreneurs using blockchain frameworks & customizable blockchain solutions.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Page Description' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Blockchain Development Company | End-to-end Blockchain Development Services - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'BlockchainX is a top notch blockchain development company with a competent team of the best blockchain developers, R&D department and blockchain consultants. We deliver end-to-end blockchain development services to start-ups, businesses, and entrepreneurs using blockchain frameworks & customizable blockchain solutions.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL('https://www.blockchainx.tech/');
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', 'https://www.blockchainx.tech/');
    this.doc.head.appendChild(link);
  }

  openmenu(menulist: any) {
    this.selectedlisted = menulist;
  }

  show = true;
  scroll() {
    this.viewportScroller.scrollToAnchor('travel');

    console.log('test top');
  }
}
