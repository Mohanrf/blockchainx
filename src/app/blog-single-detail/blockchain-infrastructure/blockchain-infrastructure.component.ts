import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-blockchain-infrastructure',
  templateUrl: './blockchain-infrastructure.component.html',
  styleUrls: ['./blockchain-infrastructure.component.css']
})
export class BlockchainInfrastructureComponent implements OnInit {

  title =
    'Governments Into New Infrastructures With Blockchain Networks';
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
        'Heading towards the future, Governments are assuring quicker adaptation with technological advancement. Identify how Blockchain in Governmental organizations has transformed to yield better management skills. Right into the blog!',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'blockchain in government sector, blockchain in government, Use Cases Of Blockchain In Government, Blockchain use cases for government, Blockchain In public sector, Blockchain in government organization',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Governments Into New Infrastructures With Blockchain Networks',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/government-new-infrastructure-in-blockchain-network',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Heading towards the future, Governments are assuring quicker adaptation with technological advancement. Identify how Blockchain in Governmental organizations has transformed to yield better management skills. Right into the blog!',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/Blockchain-Networks.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/government-new-infrastructure-in-blockchain-network',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Governments Into New Infrastructures With Blockchain Networks',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Heading towards the future, Governments are assuring quicker adaptation with technological advancement. Identify how Blockchain in Governmental organizations has transformed to yield better management skills. Right into the blog!',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/Blockchain-Networks.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/government-new-infrastructure-in-blockchain-network'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/government-new-infrastructure-in-blockchain-network'
    );
    this.doc.head.appendChild(link)
;
  }

}
