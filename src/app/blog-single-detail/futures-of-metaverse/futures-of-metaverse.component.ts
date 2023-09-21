import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-futures-of-metaverse',
  templateUrl: './futures-of-metaverse.component.html',
  styleUrls: ['./futures-of-metaverse.component.css'],
})
export class FuturesOfMetaverseComponent implements OnInit {
  title =
    'The Future of the Metaverse: Is it Hype, Hope, or Hell? | BlockchainX';
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
        'There is a lot of buzz going around the internet right now about the metaverse and how big a deal it is that the internets blockchain technology will grow over the next few years. A lot of people talk about how this is a massive trend and a huge game changer, but what exactly is the metaverse? Why is it such a big deal? What are people using it for ? This blog will help you to know the future of the metaverse. Read in depth .',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Feature of metaverse, Metaverse trends, VR impact in metaverse, Future in virtual world, Hype of metaverse, Metaverse',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'The Future of the Metaverse: Is it Hype, Hope, or Hell? | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/the-future-of-metaverse',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'There is a lot of buzz going around the internet right now about the metaverse and how big a deal it is that the internets blockchain technology will grow over the next few years. A lot of people talk about how this is a massive trend and a huge game changer, but what exactly is the metaverse? Why is it such a big deal? What are people using it for ? This blog will help you to know the future of the metaverse. Read in depth .',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/future-of-metaverse.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/the-future-of-metaverse',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'The Future of the Metaverse: Is it Hype, Hope, or Hell? | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'There is a lot of buzz going around the internet right now about the metaverse and how big a deal it is that the internets blockchain technology will grow over the next few years. A lot of people talk about how this is a massive trend and a huge game changer, but what exactly is the metaverse? Why is it such a big deal? What are people using it for ? This blog will help you to know the future of the metaverse. Read in depth .',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/future-of-metaverse.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/the-future-of-metaverse'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/the-future-of-metaverse'
    );
    this.doc.head.appendChild(link);
  }
}
