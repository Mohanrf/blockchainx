import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-key-feature-of-metaverse',
  templateUrl: './key-feature-of-metaverse.component.html',
  styleUrls: ['./key-feature-of-metaverse.component.css']
})
export class KeyFeatureOfMetaverseComponent implements OnInit {

  title =
  'Things you need to know about the innovative world: The Metaverse Keynotes';
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
      'Many of us may think of Metaverse as a fascinating thing, but at the same time, enterprises must prepare for this metaverse technology, strengthen blockchain capabilities, protect against metaverse and security risks, and embrace a new way of the Internet. To do that, we need to understand the key features of the metaverse.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'key features of the metaverse, metaverse features, understanding metaverse, features of metaverse, metaverse keynote',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Things you need to know about the innovative world: The Metaverse Keynotes',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/know-the-key-features-of-metaverse',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Many of us may think of Metaverse as a fascinating thing, but at the same time, enterprises must prepare for this metaverse technology, strengthen blockchain capabilities, protect against metaverse and security risks, and embrace a new way of the Internet. To do that, we need to understand the key features of the metaverse.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/Know-The-Key-Features-Of-Metaverse.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/know-the-key-features-of-metaverse',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Things you need to know about the innovative world: The Metaverse Keynotes',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Many of us may think of Metaverse as a fascinating thing, but at the same time, enterprises must prepare for this metaverse technology, strengthen blockchain capabilities, protect against metaverse and security risks, and embrace a new way of the Internet. To do that, we need to understand the key features of the metaverse.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/Know-The-Key-Features-Of-Metaverse.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/know-the-key-features-of-metaverse'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/know-the-key-features-of-metaverse'
  );
  this.doc.head.appendChild(link)
;
}

}
