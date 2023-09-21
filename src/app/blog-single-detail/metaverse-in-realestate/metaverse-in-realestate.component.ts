import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-metaverse-in-realestate',
  templateUrl: './metaverse-in-realestate.component.html',
  styleUrls: ['./metaverse-in-realestate.component.css']
})
export class MetaverseInRealestateComponent implements OnInit {

  title =
    'Metaverse In Real Estate - Real Escape Space That You Can Build With Our Extensive Web3 Expertise';
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
        'Web3 is something that came in the GenZ but everyone and anyone would obviously want to explore. And  if you want to catch up and understand on the hookword Real Estate Metaverse, read the blog to gain more information and build your space in it.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Metaverse in real estate, Metaverse real estate, Real estate in metaverse, Metaverse Virtual Real Estate, Blockchain development company , Blockchain development services, Blockchain development',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Metaverse In Real Estate - Real Escape Space That You Can Build With Our Extensive Web3 Expertise',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/metaverse-in-real-estate',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Web3 is something that came in the GenZ but everyone and anyone would obviously want to explore. And  if you want to catch up and understand on the hookword Real Estate Metaverse, read the blog to gain more information and build your space in it.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/metaverse/metaverse-in-real-state.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/metaverse-in-real-estate',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Metaverse In Real Estate - Real Escape Space That You Can Build With Our Extensive Web3 Expertise',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Web3 is something that came in the GenZ but everyone and anyone would obviously want to explore. And  if you want to catch up and understand on the hookword Real Estate Metaverse, read the blog to gain more information and build your space in it.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/metaverse/metaverse-in-real-state.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/metaverse-in-real-estate'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/metaverse-in-real-estate'
    );
    this.doc.head.appendChild(link)
;
  }

}
