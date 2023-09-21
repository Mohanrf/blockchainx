import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-five-blockchain-use-case',
  templateUrl: './five-blockchain-use-case.component.html',
  styleUrls: ['./five-blockchain-use-case.component.css'],
})
export class FiveBlockchainUseCaseComponent implements OnInit {
  title = '5 Blockchain Use Cases That Will Change the Telecom Industry';
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
        'Now is the right time to find out how blockchain in telecom industry is impactful. The innovative concepts of blockchain technology are now reflected in the telecom industry as well. Blockchain use cases bring new features to the telecom industry by implementing smart contracts. Read this blog to know more.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Blockchain use cases in the telecom industry, Blockchain in telecom industry, Blockchain in telecom, 5 Blockchain Use Cases Telecom Industry, Top 5 blockchain use cases in telecom',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: '5 Blockchain Use Cases That Will Change the Telecom Industry',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/five-blockchain-usecase-make-changes-in-telecom-industry',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Now is the right time to find out how blockchain in telecom industry is impactful. The innovative concepts of blockchain technology are now reflected in the telecom industry as well. Blockchain use cases bring new features to the telecom industry by implementing smart contracts. Read this blog to know more.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/Telecom.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/five-blockchain-usecase-make-changes-in-telecom-industry',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: '5 Blockchain Use Cases That Will Change the Telecom Industry',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Now is the right time to find out how blockchain in telecom industry is impactful. The innovative concepts of blockchain technology are now reflected in the telecom industry as well. Blockchain use cases bring new features to the telecom industry by implementing smart contracts. Read this blog to know more.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/Telecom.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/five-blockchain-usecase-make-changes-in-telecom-industry'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/five-blockchain-usecase-make-changes-in-telecom-industry'
    );
    this.doc.head.appendChild(link);
  }
}
