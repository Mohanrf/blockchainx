import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-blockchain-consulting',
  templateUrl: './blockchain-consulting.component.html',
  styleUrls: ['./blockchain-consulting.component.css'],
})
export class BlockchainConsultingComponent implements OnInit {
  title =
    'Blockchain Consulting Services - Access Industry-Leading Web3 Experts | BlockchainX ';
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
        'Integrate blockchain technology into your business for higher levels of success. We at BlockchainX have a team of experienced blockchain consulting experts who lead you to enjoy the fruitfulness of blockchain technology, leverage its potential and strengthen your business with a high level of security.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Blockchain Consulting Services, Blockchain Consulting Services Solutions, Blockchain Consulting',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Blockchain Consulting Services - Access Industry-Leading Web3 Experts | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/blockchain-consulting-services',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Integrate blockchain technology into your business for higher levels of success. We at BlockchainX have a team of experienced blockchain consulting experts who lead you to enjoy the fruitfulness of blockchain technology, leverage its potential and strengthen your business with a high level of security.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/Blockchain-Consulting.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/blockchain-consulting-services',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Blockchain Consulting Services - Access Industry-Leading Web3 Experts | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Integrate blockchain technology into your business for higher levels of success. We at BlockchainX have a team of experienced blockchain consulting experts who lead you to enjoy the fruitfulness of blockchain technology, leverage its potential and strengthen your business with a high level of security.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/Blockchain-Consulting.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/blockchain-consulting-services'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/blockchain-consulting-services'
    );
    this.doc.head.appendChild(link);
  }
}
