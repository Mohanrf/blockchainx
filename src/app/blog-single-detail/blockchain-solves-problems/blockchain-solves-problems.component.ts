import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-blockchain-solves-problems',
  templateUrl: './blockchain-solves-problems.component.html',
  styleUrls: ['./blockchain-solves-problems.component.css']
})
export class BlockchainSolvesProblemsComponent implements OnInit {

  title =
  'How can Blockchain technology in the automotive sector impact the world | BlockchainX';
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
      'Nowadays, auto manufacturers are exploring an innovative technology called blockchain to improve security with more connected vehicles in their business. Implementing major use cases of blockchain technology in the automotive industry can benefit from the immutability and built-in verification feature. Lets dig deep into the use cases of blockchain technology in the automotive sector.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'Blockchain in Automotive Industry, Blockchain in automotive sector, Blockchain in Automotive,Blockchain technology in in automotive sector,blockchain-based supply-chain system, Benefits of  Automotive Industry in blockchain',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'How can Blockchain technology in the automotive sector impact the world | BlockchainX',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/blockchain-solves-top-three-problems-in-automotive-sector',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Nowadays, auto manufacturers are exploring an innovative technology called blockchain to improve security with more connected vehicles in their business. Implementing major use cases of blockchain technology in the automotive industry can benefit from the immutability and built-in verification feature. Lets dig deep into the use cases of blockchain technology in the automotive sector.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/automotive-sector.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/blockchain-solves-top-three-problems-in-automotive-sector',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'How can Blockchain technology in the automotive sector impact the world | BlockchainX',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Nowadays, auto manufacturers are exploring an innovative technology called blockchain to improve security with more connected vehicles in their business. Implementing major use cases of blockchain technology in the automotive industry can benefit from the immutability and built-in verification feature. Lets dig deep into the use cases of blockchain technology in the automotive sector.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/automotive-sector.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/blockchain-solves-top-three-problems-in-automotive-sector'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/blockchain-solves-top-three-problems-in-automotive-sector'
  );
  this.doc.head.appendChild(link)
;
}

}
