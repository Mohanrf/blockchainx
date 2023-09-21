import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-solana-development',
  templateUrl: './solana-development.component.html',
  styleUrls: ['./solana-development.component.css'],
})
export class SolanaDevelopmentComponent implements OnInit {
  title = 'Hire Solana Blockchain Development Services From BlockchiainX';
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
        'We help you develop and launch exclusive business class solutions deployed on the Solana Network. BlockchainX with our extended Blockchian development services, we are also capable of rendering and satisfying your requirement in your way. And Solana Blockchain development services are very much customized here.  ',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Hire Solana Blockchain Developers, Hire expert programmer and solana developer from India',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Hire Solana Blockchain Development Services From BlockchiainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://blockchainx.tech/hire-solidity-developers',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'We help you develop and launch exclusive business class solutions deployed on the Solana Network. BlockchainX with our extended Blockchian development services, we are also capable of rendering and satisfying your requirement in your way. And Solana Blockchain development services are very much customized here.  ',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/solana-development.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://blockchainx.tech/hire-solidity-developers',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Hire Solana Blockchain Development Services From BlockchiainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'We help you develop and launch exclusive business class solutions deployed on the Solana Network. BlockchainX with our extended Blockchian development services, we are also capable of rendering and satisfying your requirement in your way. And Solana Blockchain development services are very much customized here.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/solana-development.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://blockchainx.tech/hire-solidity-developers'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://blockchainx.tech/hire-solidity-developers'
    );
    this.doc.head.appendChild(link);
  }
}
