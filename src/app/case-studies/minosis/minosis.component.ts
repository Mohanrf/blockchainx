import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-minosis',
  templateUrl: './minosis.component.html',
  styleUrls: ['./minosis.component.css'],
})
export class MinosisComponent implements OnInit {
  title =
    'Minosis | The one-stop-shop for all of your crypto mining needs - BlockchainX  ';
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
        'Get a lucrative chance to mine and receive tips through its unique payment system, as well as the opportunity to join mining pools & incentives to the clients.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Blockchain, Distributed Ledgers, Blockchain Technology, Cryptocurrency, Enterprise Technology, Cryptocurrency',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Minosis | The one-stop-shop for all of your crypto mining needs - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/minosis',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Get a lucrative chance to mine and receive tips through its unique payment system, as well as the opportunity to join mining pools & incentives to the clients.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/minosis',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Minosis | The one-stop-shop for all of your crypto mining needs - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Get a lucrative chance to mine and receive tips through its unique payment system, as well as the opportunity to join mining pools & incentives to the clients.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/minosis'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', 'https://www.blockchainx.tech/minosis');
    this.doc.head.appendChild(link);
  }
}
