import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-token-migration',
  templateUrl: './token-migration.component.html',
  styleUrls: ['./token-migration.component.css'],
})
export class TokenMigrationComponent implements OnInit {
  title =
    'Token Migration Platform Development - Create a token Migrator Dapp for your project - BlockchainX';
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
        'Got a faulty token or need to upgrade it’s features? Let your users migrate your token easily through our smart contract.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'token migration development, token migration platform development, token migration platform ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Token Migration Platform Development - Create a token Migrator Dapp for your project - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/token-migration',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Got a faulty token or need to upgrade it’s features? Let your users migrate your token easily through our smart contract.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/token-migration.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/token-migration',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Token Migration Platform Development - Create a token Migrator Dapp for your project - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Got a faulty token or need to upgrade it’s features? Let your users migrate your token easily through our smart contract.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/token-migration.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/token-migration'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', 'https://www.blockchainx.tech/token-migration');
    this.doc.head.appendChild(link);
  }
}
