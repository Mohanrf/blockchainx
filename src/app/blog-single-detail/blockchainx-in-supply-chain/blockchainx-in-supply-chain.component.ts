import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-blockchainx-in-supply-chain',
  templateUrl: './blockchainx-in-supply-chain.component.html',
  styleUrls: ['./blockchainx-in-supply-chain.component.css']
})
export class BlockchainxInSupplyChainComponent implements OnInit {

  title =
  'Blockchain Development Company | End-to-end Blockchain Development Services - BlockchainX';
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
      'BlockchainX is a top notch blockchain development company with a competent team of the best blockchain developers, R&amp;D department and blockchain consultants. We deliver end-to-end blockchain development services to start-ups, businesses, and entrepreneurs using blockchain frameworks &amp; customizable blockchain solutions.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'Cold wallet development, Cold wallet integration with web apps',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Blockchain Development Company | End-to-end Blockchain Development Services - BlockchainX',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/blockchain-in-supply-chain-management',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'BlockchainX is a top notch blockchain development company with a competent team of the best blockchain developers, R&amp;D department and blockchain consultants. We deliver end-to-end blockchain development services to start-ups, businesses, and entrepreneurs using blockchain frameworks &amp; customizable blockchain solutions.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/Blockchain-in-supply-chain-management.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/cold-wallet-integration',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Blockchain Development Company | End-to-end Blockchain Development Services - BlockchainX',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'BlockchainX is a top notch blockchain development company with a competent team of the best blockchain developers, R&amp;D department and blockchain consultants. We deliver end-to-end blockchain development services to start-ups, businesses, and entrepreneurs using blockchain frameworks &amp; customizable blockchain solutions.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/Blockchain-in-supply-chain-management.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/blockchain-in-supply-chain-management'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/blockchain-in-supply-chain-management'
  );
  this.doc.head.appendChild(link)
;
}

}
