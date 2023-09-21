import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-defi-yield-farming',
  templateUrl: './defi-yield-farming.component.html',
  styleUrls: ['./defi-yield-farming.component.css'],
})
export class DefiYieldFarmingComponent implements OnInit {
  title =
    'DeFi Yield Farming Development Services - Empower Your Startup Journey with Our DeFi Yield Farming Development Services - BlockchainX';
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
        'Get a highly secure and simple way to benefit from DeFi yielding farming platform development at a minimal price. We bring a revenue-generating strategy to work. We will walk you through every crucial step to tailor the solution. Reach out to us today with our team to get started on your DeFi work quickly!',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'DeFi Yield Farming Development Services, DeFi Yield Farming Development, DeFi Yield Farming Platform',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'DeFi Yield Farming Development Services - Launch Your DeFi Farming Protocol Quickly | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/defi-yield-farming-development',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Get a highly secure and simple way to benefit from DeFi yielding farming platform development at a minimal price. We bring a revenue-generating strategy to work. We will walk you through every crucial step to tailor the solution. Reach out to us today with our team to get started on your DeFi work quickly!',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/defi-yield-farming.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/defi-yield-farming-development',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'DeFi Yield Farming Development Services - Empower Your Startup Journey with Our DeFi Yield Farming Development Services - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Get a highly secure and simple way to benefit from DeFi yielding farming platform development at a minimal price. We bring a revenue-generating strategy to work. We will walk you through every crucial step to tailor the solution. Reach out to us today with our team to get started on your DeFi work quickly!',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/defi-yield-farming.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/defi-yield-farming-development'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/defi-yield-farming-development'
    );
    this.doc.head.appendChild(link);
  }
}
