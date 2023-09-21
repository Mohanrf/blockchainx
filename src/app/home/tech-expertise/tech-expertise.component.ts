import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-tech-expertise',
  templateUrl: './tech-expertise.component.html',
  styleUrls: ['./tech-expertise.component.css']
})
export class TechExpertiseComponent implements OnInit {

  title = 'Contact - BlockchainX';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
    @Inject(DOCUMENT) private doc: Document) { }
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  this.meta.updateTag({ name: 'description', content: 'Contact BlockchainX is a top notch blockchain development company with a competent team of the best blockchain developers, R&D department and blockchain consultants. We deliver end-to-end blockchain development services to start-ups, businesses, and entrepreneurs using blockchain frameworks & customizable blockchain solutions.' });
  this.meta.updateTag({ name: 'keywords', content: 'Contact Blockchain Development, Blockchain Development Company, Blockchain Development Services,Blockchain App Development Company,Blockchain App Development Services, Blockchain Software Development,Blockchain Software Development Company, Blockchain Development Company,Blockchain Application Development Company' });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({ property: 'og:title', content: 'Contact Blockchain Development Company | End-to-end Blockchain Development Services - BlockchainX' });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({ property: 'og:url', content: 'https://www.blockchainx.tech/contact' });
  this.meta.updateTag({ property: 'og:description', content: 'BlockchainX is a top notch blockchain development company with a competent team of the best blockchain developers, R&D department and blockchain consultants. We deliver end-to-end blockchain development services to start-ups, businesses, and entrepreneurs using blockchain frameworks & customizable blockchain solutions.' });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({ property: 'og:image', content: 'https://www.blockchainx.tech/assets-new/images/og/BlockchainX OG Image.png' });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({ name: 'twitter:site', content: 'https://www.blockchainx.tech/contact' });
  this.meta.updateTag({ name: 'twitter:title', content: 'Contact Blockchain Development Company | End-to-end Blockchain Development Services - BlockchainX' });
  this.meta.updateTag({ name: 'twitter:description', content: 'Contact BlockchainX is a top notch blockchain development company with a competent team of the best blockchain developers, R&D department and blockchain consultants. We deliver end-to-end blockchain development services to start-ups, businesses, and entrepreneurs using blockchain frameworks & customizable blockchain solutions.' });
  this.meta.updateTag({ name: 'twitter:image', content: 'https://www.blockchainx.tech/assets-new/images/og/BlockchainX OG Image.png' });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL("https://www.blockchainx.tech/contact");
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute('href', 'https://www.blockchainx.tech/contact');
  this.doc.head.appendChild(link);
}

}
