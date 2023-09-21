import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-ten-metaverse-use-cases-examples-for-business',
  templateUrl: './ten-metaverse-use-cases-examples-for-business.component.html',
  styleUrls: ['./ten-metaverse-use-cases-examples-for-business.component.css']
})
export class TenMetaverseUseCasesExamplesForBusinessComponent implements OnInit {

  title =
    'Understanding the metaverse through real-world use cases and examples';
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
        'Do you want to learn Metaverse concepts? Start learning the top real-world metaverse use cases and examples, and then expand your knowledge to become a metaverse specialist.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'use cases of metaverse, metaverse use cases, metaverse real life examples, metaverse use cases and benefits',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Understanding the metaverse through real-world use cases and examples',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/ten-metaverse-use-cases-examples-for-business',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Do you want to learn Metaverse concepts? Start learning the top real-world metaverse use cases and examples, and then expand your knowledge to become a metaverse specialist.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'http://blockchainx.tech/assets-new/images/blog-new/top10-metaverse/top-10-metaverse-case.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/ten-metaverse-use-cases-examples-for-business',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Understanding the metaverse through real-world use cases and examples',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Do you want to learn Metaverse concepts? Start learning the top real-world metaverse use cases and examples, and then expand your knowledge to become a metaverse specialist.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'http://blockchainx.tech/assets-new/images/blog-new/top10-metaverse/top-10-metaverse-case.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/ten-metaverse-use-cases-examples-for-business'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/ten-metaverse-use-cases-examples-for-business'
    );
    this.doc.head.appendChild(link)
;
  }

}
