import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-crowdfunding-script',
  templateUrl: './crowdfunding-script.component.html',
  styleUrls: ['./crowdfunding-script.component.css'],
})
export class CrowdfundingScriptComponent implements OnInit {
  title =
    'Crowdfunding Software - Making it Possible for Crypto Projects to Pull investors';
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
        'Addressing the real-world demand and funding needs, our crowdfundo=ing software at BockchainX can help you ease the process. We facilitate a fully featured, advanced solution with security and customization on top. Reach out to talk to our experts now.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Crowdfund software, Crowdfunding software, Crowdfunding script, Crowdfunding clone script,Crowdfunding software development, Crowdfunding mlm software, Crowdfunding software platform,Crowding white label software, White label crowdfunding software, Equity crowdfunding software, Blockchain powered crowdfunding software, Crypto powered crowdfunding software',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Crowdfunding Software - Making it Possible for Crypto Projects to Pull investors',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/crowdfunding-script',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Addressing the real-world demand and funding needs, our crowdfundo=ing software at BockchainX can help you ease the process. We facilitate a fully featured, advanced solution with security and customization on top. Reach out to talk to our experts now.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/crowd-fund.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/crowdfunding-script',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Crowdfunding Software - Making it Possible for Crypto Projects to Pull investors',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Addressing the real-world demand and funding needs, our crowdfundo=ing software at BockchainX can help you ease the process. We facilitate a fully featured, advanced solution with security and customization on top. Reach out to talk to our experts now.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/crowd-fund.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/crowdfunding-script'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/crowdfunding-script'
    );
    this.doc.head.appendChild(link);
  }
}
