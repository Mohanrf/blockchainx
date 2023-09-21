import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-dao-development',
  templateUrl: './dao-development.component.html',
  styleUrls: ['./dao-development.component.css'],
})
export class DaoDevelopmentComponent implements OnInit {
  title =
    'DAO Development Company - Developing Secured Ecosystem Working On Smart Contract';
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
        'Ensuring double-guarded security, our multi-layered DAO Platform development shall help you offer strong, secure, and safe DAO solutions for your audience that sound and safe. Connect and talk with our experts to build a guarded Decentralised solution. ',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'DAO Development Company, DAO Development Services, DAO platform development, DAO Blockchain Development, DAO Blockchain Development Platform, Decentralized Autonomous Organization ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'DAO Development Company - Developing Secured Ecosystem Working On Smart Contract',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/dao-development-company',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Ensuring double-guarded security, our multi-layered DAO Platform development shall help you offer strong, secure, and safe DAO solutions for your audience that sound and safe. Connect and talk with our experts to build a guarded Decentralised solution. ',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/dao-development.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/dao-development-company',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'DAO Development Company - Developing Secured Ecosystem Working On Smart Contract',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Ensuring double-guarded security, our multi-layered DAO Platform development shall help you offer strong, secure, and safe DAO solutions for your audience that sound and safe. Connect and talk with our experts to build a guarded Decentralised solution. ',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/dao-development.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/dao-development-company'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/dao-development-company'
    );
    this.doc.head.appendChild(link);
  }
}
