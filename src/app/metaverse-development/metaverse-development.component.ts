import { Component, Inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../shared/canonical.service';

@Component({
  selector: 'app-metaverse-development',
  templateUrl: './metaverse-development.component.html',
  styleUrls: ['./metaverse-development.component.css'],
})
export class MetaverseDevelopmentCompanyComponent implements OnInit {
  title =
    'Metaverse Development Company - Build Products for Metaverses | BlockchainX';
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
        'Build anything for the metaverse with our metaverse development services. Hire the best architects and developers from a leading metaverse development company.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Metaverse development company, Metaverse development services, Metaverse development solutions',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Metaverse Development Company - Build Products for Metaverses | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/metaverse-development-company',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Build anything for the metaverse with our metaverse development services. Hire the best architects and developers from a leading metaverse development company.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/metaverse-development.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/metaverse-development-company',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Metaverse Development Company - Build Products for Metaverses | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Build anything for the metaverse with our metaverse development services. Hire the best architects and developers from a leading metaverse development company.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/metaverse-development.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/metaverse-development-company'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/metaverse-development-company'
    );
    this.doc.head.appendChild(link);
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    navSpeed: 500,
    margin: 30,
    dots: false,
    center: true,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      740: {
        items: 2,
      },
      1000: {
        items: 5,
      },
      1280: {
        items: 5,
      },
      1600: {
        items: 5.3,
      },
    },
    nav: false,
  };
}
