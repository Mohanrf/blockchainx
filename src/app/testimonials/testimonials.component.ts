import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../shared/canonical.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  title = 'Client Testimonials and Feedbacks - BlockchainX';
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
        'Explore Blockchainx Customer Reviews, Feedback and how customer are more closely working with Blockchainx',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: '',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Client Testimonials and Feedbacks - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/testimonial',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Explore Blockchainx Customer Reviews, Feedback and how customer are more closely working with Blockchainx',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/BlockchainX OG Image.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/testimonial',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Client Testimonials and Feedbacks - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Explore Blockchainx Customer Reviews, Feedback and how customer are more closely working with Blockchainx',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/BlockchainX OG Image.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/testimonial'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', '');
    this.doc.head.appendChild(link);
  }
}
