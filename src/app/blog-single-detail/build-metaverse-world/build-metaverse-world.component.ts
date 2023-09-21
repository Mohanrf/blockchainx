import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-build-metaverse-world',
  templateUrl: './build-metaverse-world.component.html',
  styleUrls: ['./build-metaverse-world.component.css']
})
export class BuildMetaverseWorldComponent implements OnInit {

  title =
    'How to create your own Metaverse virtual world';
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
        'If you want to be a part of the internet of the future, you should consider building  a metaverse, and this blog will explain how to build a metaverse world.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'how to build your own metaverse,how to build a metaverse world,build virtual world,build your own virtual world, how to create your own virtual world,how to build a virtual reality world',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'How to create your own Metaverse virtual world',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/how-to-create-your-own-Metaverse-virtual-world',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'If you want to be a part of the internet of the future, you should consider building  a metaverse, and this blog will explain how to build a metaverse world.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/metaverse-virtual-world.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/how-to-create-your-own-Metaverse-virtual-world',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'How to create your own Metaverse virtual world',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'If you want to be a part of the internet of the future, you should consider building  a metaverse, and this blog will explain how to build a metaverse world.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/metaverse-virtual-world.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/how-to-create-your-own-Metaverse-virtual-world'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/how-to-create-your-own-Metaverse-virtual-world'
    );
    this.doc.head.appendChild(link)
;
  }

}
