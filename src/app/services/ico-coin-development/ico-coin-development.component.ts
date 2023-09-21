import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-ico-coin-development',
  templateUrl: './ico-coin-development.component.html',
  styleUrls: ['./ico-coin-development.component.css'],
})
export class IcoCoinDevelopmentComponent implements OnInit {
  title =
    'ICO Development Company - Providing Enterprise Standard Token Solutions';
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
        'Kickstart your web3 journey with us, from offering token development to listing, the ICO Development services employ us in curating highly standard platforms easing your requirement. Drop at BlockchainX now, and our experts shall help you the best. ',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'ICO Development Company, ICO Development Services, ICO software development company, ICO development   ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'ICO Development Company - Providing Enterprise Standard Token Solutions',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/ico-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Kickstart your web3 journey with us, from offering token development to listing, the ICO Development services employ us in curating highly standard platforms easing your requirement. Drop at BlockchainX now, and our experts shall help you the best. ',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/ico-maximize.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/ico-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'ICO Development Company - Providing Enterprise Standard Token Solutions',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Kickstart your web3 journey with us, from offering token development to listing, the ICO Development services employ us in curating highly standard platforms easing your requirement. Drop at BlockchainX now, and our experts shall help you the best. ',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/ico-maximize.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/ico-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', 'https://www.blockchainx.tech/ico-development');
    this.doc.head.appendChild(link);
  }
}
