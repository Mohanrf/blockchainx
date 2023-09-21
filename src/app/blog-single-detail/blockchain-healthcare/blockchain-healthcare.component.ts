import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-blockchain-healthcare',
  templateUrl: './blockchain-healthcare.component.html',
  styleUrls: ['./blockchain-healthcare.component.css']
})
export class BlockchainHealthcareComponent implements OnInit {

  title =
  'Blockchain Uses In Healthcare - Check In For Better LifeCare';
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
      'Healthcare as a  sector needs to be taken care of, but how? Blockchain technology in healthcare is a revolutionary step to get things monitored and updated on time. Explore through this blog how Blockchain uses in Healthcare is groomed!',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'blockchain in healthcare industry, benefits of blockchain in healthcare, healthcare blockchain use cases, healthcare blockchain technology, blockchain healthcare data, blockchain applications in healthcare, blockchain use in healthcare, blockchain health data ',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Blockchain Uses In Healthcare - Check In For Better LifeCare',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/benefits-of-blockchain-in-healthcare',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Healthcare as a  sector needs to be taken care of, but how? Blockchain technology in healthcare is a revolutionary step to get things monitored and updated on time. Explore through this blog how Blockchain uses in Healthcare is groomed!',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/blockchain-in-healthcare.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/benefits-of-blockchain-in-healthcare',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Blockchain Uses In Healthcare - Check In For Better LifeCare',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Healthcare as a  sector needs to be taken care of, but how? Blockchain technology in healthcare is a revolutionary step to get things monitored and updated on time. Explore through this blog how Blockchain uses in Healthcare is groomed!',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/blockchain-in-healthcare.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/benefits-of-blockchain-in-healthcare'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/benefits-of-blockchain-in-healthcare'
  );
  this.doc.head.appendChild(link)
;
}

}
