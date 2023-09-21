import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-ai-meet-metaverse',
  templateUrl: './ai-meet-metaverse.component.html',
  styleUrls: ['./ai-meet-metaverse.component.css']
})
export class AiMeetMetaverseComponent implements OnInit {

  title =
    'Blockchain and AI : Coming to Intersect in the Metaverse';
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
        'Artificial intelligence and blockchain technology are being combined in the metaverse. This blog discusses how the blockchain metaverse and the AI metaverse meet to impact the metaverse world.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'AI metaverse,blockchain metaverse,Blockchain 3.0,role of ai in metaverse',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Blockchain and AI : Coming to Intersect in the Metaverse',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/blockchain-role-ai-meet-the-world-metaverse',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Artificial intelligence and blockchain technology are being combined in the metaverse. This blog discusses how the blockchain metaverse and the AI metaverse meet to impact the metaverse world.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/blockchain-role-ai-meet-the-world-metaverse.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/blockchain-role-ai-meet-the-world-metaverse',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Blockchain and AI : Coming to Intersect in the Metaverse',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Artificial intelligence and blockchain technology are being combined in the metaverse. This blog discusses how the blockchain metaverse and the AI metaverse meet to impact the metaverse world.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/blockchain-role-ai-meet-the-world-metaverse.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/blockchain-role-ai-meet-the-world-metaverse'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/blockchain-role-ai-meet-the-world-metaverse'
    );
    this.doc.head.appendChild(link)
;
  }

}
