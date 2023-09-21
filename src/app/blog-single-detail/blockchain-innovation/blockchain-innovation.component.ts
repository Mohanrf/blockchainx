import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-blockchain-innovation',
  templateUrl: './blockchain-innovation.component.html',
  styleUrls: ['./blockchain-innovation.component.css']
})
export class BlockchainInnovationComponent implements OnInit {

  title =
  'The advent of blockchain has brought massive changes in the financial sector';
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
      'Nowadays, more and more financial companies realizing the potential of blockchain technology. The adoption of Blockchain in financial service could bypass third parties interventions, strict rules and regulations, which also eliminate excess transaction fees and other costs associated with these services. Read out the blog to explore more.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'Blockchain and its innovation, blockchain impact in financial service, Blockchain in financial sector, Blockchain in financial, Blockchain innovations, Blockchain in financial service, Use of Blockchain in financial service ',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'The advent of blockchain has brought massive changes in the financial sector',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/blockchain-innovations-can-transform-financial-industry',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Nowadays, more and more financial companies realizing the potential of blockchain technology. The adoption of Blockchain in financial service could bypass third parties interventions, strict rules and regulations, which also eliminate excess transaction fees and other costs associated with these services. Read out the blog to explore more.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/Financial-Service-Industry.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/blockchain-innovations-can-transform-financial-industry',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'The advent of blockchain has brought massive changes in the financial sector',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Nowadays, more and more financial companies realizing the potential of blockchain technology. The adoption of Blockchain in financial service could bypass third parties interventions, strict rules and regulations, which also eliminate excess transaction fees and other costs associated with these services. Read out the blog to explore more.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/Financial-Service-Industry.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/blockchain-innovations-can-transform-financial-industry'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/blockchain-innovations-can-transform-financial-industry'
  );
  this.doc.head.appendChild(link)
;
}

}
