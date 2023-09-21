import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-defi-staking-platform',
  templateUrl: './defi-staking-platform.component.html',
  styleUrls: ['./defi-staking-platform.component.css'],
})
export class DefiStakingPlatformComponent implements OnInit {
  title =
    'DeFi Staking Development Services - Employ our reliable & scalable DeFi staking platform development services for your business - BlockchainX';
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
        'Accelerate your business with our cutting-edge DeFi Staking Platform Development Services. We provide value-added services & mission-driven propositions to help you design DeFi staking software that combines best-in-class features while delivering high-grade security. Connect with us today and let our DeFi experts solve any doubts.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'DeFi Staking Development Services, DeFi Staking Development, DeFi Staking Platform Development Services, DeFi Staking Platform',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'DeFi Staking Development Services - Employ our reliable & scalable DeFi staking platform development services for your business - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/defi-staking-platform',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Accelerate your business with our cutting-edge DeFi Staking Platform Development Services. We provide value-added services & mission-driven propositions to help you design DeFi staking software that combines best-in-class features while delivering high-grade security. Connect with us today and let our DeFi experts solve any doubts.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/defi-staking.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/defi-staking-platform',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'DeFi Staking Development Services - Employ our reliable & scalable DeFi staking platform development services for your business - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Accelerate your business with our cutting-edge DeFi Staking Platform Development Services. We provide value-added services & mission-driven propositions to help you design DeFi staking software that combines best-in-class features while delivering high-grade security. Connect with us today and let our DeFi experts solve any doubts.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/defi-staking.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/defi-staking-platform'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/defi-staking-platform'
    );
    this.doc.head.appendChild(link);
  }
}
