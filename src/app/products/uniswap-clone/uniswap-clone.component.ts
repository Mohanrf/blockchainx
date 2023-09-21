import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-uniswap-clone',
  templateUrl: './uniswap-clone.component.html',
  styleUrls: ['./uniswap-clone.component.css'],
})
export class UniswapCloneComponent implements OnInit {
  title =
    'Uniswap Clone Script - Launch Your Own DEX in 7 Days | BlockchainX  ';
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
        'Create your own DeFi-based decentralized exchange platform like Uniswap with advanced security features using the BlockchainX Uniswap Clone Script. Contact our experts right away!',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Uniswap clone, Uniswap clone script, Uniswap exchange clone, Uniswap clone development company, Uniswap clone software, uniswap exchange clone development ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Uniswap Clone Script - Launch Your Own DEX in 7 Days | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/uniswap-clone-script',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Create your own DeFi-based decentralized exchange platform like Uniswap with advanced security features using the BlockchainX Uniswap Clone Script. Contact our experts right away!',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/uniswap-clone-script.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/uniswap-clone-script',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Uniswap Clone Script - Launch Your Own DEX in 7 Days | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Create your own DeFi-based decentralized exchange platform like Uniswap with advanced security features using the BlockchainX Uniswap Clone Script. Contact our experts right away!',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/uniswap-clone-script.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/uniswap-clone-script'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/uniswap-clone-script'
    );
    this.doc.head.appendChild(link);
  }
}
