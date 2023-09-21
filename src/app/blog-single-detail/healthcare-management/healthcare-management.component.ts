import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-healthcare-management',
  templateUrl: './healthcare-management.component.html',
  styleUrls: ['./healthcare-management.component.css'],
})
export class HealthcareManagementComponent implements OnInit {
  title =
    'The Application of Blockchain Technology in Healthcare Data Management';
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
        'Securing data or information is crucial and needs to be further secured if it is personal medical data. There are various ways to secure data today, but they all have drawbacks. Implementing blockchain technology in the healthcare sector makes data more secure. It enhances the security of patients electronic medical records, promotes.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'healthcare data management, healthcare Information management, Blockchain in healthcare',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'The Application of Blockchain Technology in Healthcare Data Management',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/healthcare-data-management',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Securing data or information is crucial and needs to be further secured if it is personal medical data. There are various ways to secure data today, but they all have drawbacks. Implementing blockchain technology in the healthcare sector makes data more secure. It enhances the security of patients electronic medical records, promotes.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/technology-in-healthcare.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/healthcare-data-management',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'The Application of Blockchain Technology in Healthcare Data Management',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Securing data or information is crucial and needs to be further secured if it is personal medical data. There are various ways to secure data today, but they all have drawbacks. Implementing blockchain technology in the healthcare sector makes data more secure. It enhances the security of patients electronic medical records, promotes.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/technology-in-healthcare.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/healthcare-data-management'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/healthcare-data-management'
    );
    this.doc.head.appendChild(link);
  }
}
