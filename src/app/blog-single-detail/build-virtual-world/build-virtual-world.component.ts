import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-build-virtual-world',
  templateUrl: './build-virtual-world.component.html',
  styleUrls: ['./build-virtual-world.component.css'],
})
export class BuildVirtualWorldComponent implements OnInit {
  title =
    'Unreal Engine Virtual Reality Tutorial - Simplifying Virtual World-Building';
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
        'Its unique state-of-art, unreal engine is doing wonders in the web3 space in developing advanced ecosystems. Uncover the abilities of the Unreal engine in building a virtual world, everything is customized and highly equipped with efficiency. Tap to read more.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'unreal engine 5 virtual reality, unreal engine virtual reality tutorial, build virtual world, virtual world-building',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Unreal Engine Virtual Reality Tutorial - Simplifying Virtual World-Building',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://www.blockchainx.tech/build-virtual-world-with-unreal-engine',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Its unique state-of-art, unreal engine is doing wonders in the web3 space in developing advanced ecosystems. Uncover the abilities of the Unreal engine in building a virtual world, everything is customized and highly equipped with efficiency. Tap to read more.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/build-virtual-world.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content:
        'https://www.blockchainx.tech/build-virtual-world-with-unreal-engine',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Unreal Engine Virtual Reality Tutorial - Simplifying Virtual World-Building',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Its unique state-of-art, unreal engine is doing wonders in the web3 space in developing advanced ecosystems. Uncover the abilities of the Unreal engine in building a virtual world, everything is customized and highly equipped with efficiency. Tap to read more.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/build-virtual-world.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/build-virtual-world-with-unreal-engine'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/build-virtual-world-with-unreal-engine'
    );
    this.doc.head.appendChild(link);
  }
}
