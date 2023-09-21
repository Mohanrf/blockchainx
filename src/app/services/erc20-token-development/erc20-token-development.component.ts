import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-erc20-token-development',
  templateUrl: './erc20-token-development.component.html',
  styleUrls: ['./erc20-token-development.component.css'],
})
export class Erc20TokenDevelopmentComponent implements OnInit {
  title =
    'Easy ERC20 Token Generator | Custom ERC20 token development services - BlockchainX';
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
        'Quickly launch tokens with erc20 token generator. Hire an erc20 token generator company with experts. Expert erc20 token development services.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'erc20 token development -  Erc20 token generator- How to create erc20 token  -  Create your own erc20 token, Erc20 token maker, Best Erc20 token generator, Erc20 token creator, Erc20 token create, ethereum token generator',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Easy ERC20 Token Generator | Custom ERC20 token development services - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/erc20-token-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Quickly launch tokens with erc20 token generator. Hire an erc20 token generator company with experts. Expert erc20 token development services.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/erc-development.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/erc20-token-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Easy ERC20 Token Generator | Custom ERC20 token development services - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Quickly launch tokens with erc20 token generator. Hire an erc20 token generator company with experts. Expert erc20 token development services.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/erc-development.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/erc20-token-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/erc20-token-development'
    );
    this.doc.head.appendChild(link);
  }
}
