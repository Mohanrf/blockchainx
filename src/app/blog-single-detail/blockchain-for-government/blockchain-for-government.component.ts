import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-blockchain-for-government',
  templateUrl: './blockchain-for-government.component.html',
  styleUrls: ['./blockchain-for-government.component.css']
})
export class BlockchainForGovernmentComponent implements OnInit {

  title =
    'Blockchain in Government: A Step Towards a Better Tomorrow';
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
        'Find out how blockchain for government and public sector can change the system forever. We show you the benefits of blockchain in government, and how the application of blockchain in government can solve the present problems.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'blockchain for government and public services, blockchain government, blockchain government use cases pdf, application of blockchain in government, blockchain for government digital identity, us government blockchain, blockchain government regulation, blockchain for digital government',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Blockchain in Government: A Step Towards a Better Tomorrow',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/blockchain-for-government',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Find out how blockchain for government and public sector can change the system forever. We show you the benefits of blockchain in government, and how the application of blockchain in government can solve the present problems.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/blockchain-for-government.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/blockchain-for-government',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Blockchain in Government: A Step Towards a Better Tomorrow',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Find out how blockchain for government and public sector can change the system forever. We show you the benefits of blockchain in government, and how the application of blockchain in government can solve the present problems.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/blockchain-for-government.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/blockchain-for-government'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/blockchain-for-government'
    );
    this.doc.head.appendChild(link)
;
  }

}
