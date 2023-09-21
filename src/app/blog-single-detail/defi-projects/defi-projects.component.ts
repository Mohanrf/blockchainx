import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-defi-projects',
  templateUrl: './defi-projects.component.html',
  styleUrls: ['./defi-projects.component.css'],
})
export class DefiProjectsComponent implements OnInit {
  title = 'Top 6 DeFi Projects of 2020: The Hype, The Revolution, and Autonomy';
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
        'Best defi projects 2020 for retail investors and institutional investors. Complete defi protocol list with the top defi projects for investors. Find out the best defi lending platforms of 2020.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'best defi projects 2020, defi protocols, defi token list, top 10 defi projects, what is defi, defi tokens, defi crypto, upcoming defi projects, decentralised finance development',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Top 6 DeFi Projects of 2020: The Hype, The Revolution, and Autonomy',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/ethereum-defi-decentralized-projects',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Best defi projects 2020 for retail investors and institutional investors. Complete defi protocol list with the top defi projects for investors. Find out the best defi lending platforms of 2020.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/top-defi-projects-2020.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/ethereum-defi-decentralized-projects',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Top 6 DeFi Projects of 2020: The Hype, The Revolution, and Autonomy',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Best defi projects 2020 for retail investors and institutional investors. Complete defi protocol list with the top defi projects for investors. Find out the best defi lending platforms of 2020.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/top-defi-projects-2020.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/ethereum-defi-decentralized-projects'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/ethereum-defi-decentralized-projects'
    );
    this.doc.head.appendChild(link);
  }
}
