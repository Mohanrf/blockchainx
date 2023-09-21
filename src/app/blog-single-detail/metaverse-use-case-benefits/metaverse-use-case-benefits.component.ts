import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-metaverse-use-case-benefits',
  templateUrl: './metaverse-use-case-benefits.component.html',
  styleUrls: ['./metaverse-use-case-benefits.component.css']
})
export class MetaverseUseCaseBenefitsComponent implements OnInit {

  title =
    'Metaverse Use Cases And Benefits - All The You Need To Know About Metaverse Benefits In Digital Era | BlockchainX';
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
        'The most approachable and customized platform, Metaverse use cases are wide and vast, alongside the benefits of the metaverse is also valuable. This opens an arena to explore the potential of both individual games and team play. Explore the various applications of the metaverse here.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Metaverse use cases, Metaverse benefits, Benefits of metaverse, Applications of the Metaverse',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Metaverse Use Cases And Benefits - All The You Need To Know About Metaverse Benefits In Digital Era | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/metaverse-use-case-and-benefits',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'The most approachable and customized platform, Metaverse use cases are wide and vast, alongside the benefits of the metaverse is also valuable. This opens an arena to explore the potential of both individual games and team play. Explore the various applications of the metaverse here.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/metaverse-use-case.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/metaverse-use-case-and-benefits',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Metaverse Use Cases And Benefits - All The You Need To Know About Metaverse Benefits In Digital Era | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'The most approachable and customized platform, Metaverse use cases are wide and vast, alongside the benefits of the metaverse is also valuable. This opens an arena to explore the potential of both individual games and team play. Explore the various applications of the metaverse here.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/metaverse-use-case.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/metaverse-use-case-and-benefits'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/metaverse-use-case-and-benefits'
    );
    this.doc.head.appendChild(link)
;
  }

}
