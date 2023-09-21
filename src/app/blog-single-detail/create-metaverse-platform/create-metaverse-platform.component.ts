import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-create-metaverse-platform',
  templateUrl: './create-metaverse-platform.component.html',
  styleUrls: ['./create-metaverse-platform.component.css']
})
export class CreateMetaversePlatformComponent implements OnInit {

  title =
  'Metaverse Development - Create a Customized Metaverse Platform With BlockchainX';
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
      'Metaverse is a surreal solution exploring endless possibilities for businesses in the digital world. BlockchainX evolving in the web3 space with our blockchain-based development solution, we have helped many grow, and eventually, this blog shall detail every aspect of our development phase. Read that now.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'create your own metaverse, create a metaverse, build a metaverse, create metaverse platform, How to create a metaverse, Metaverse Development , Metaverse Development services',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Metaverse Development - Create a Customized Metaverse Platform With BlockchainX',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/create-metaverse-platform',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Metaverse is a surreal solution exploring endless possibilities for businesses in the digital world. BlockchainX evolving in the web3 space with our blockchain-based development solution, we have helped many grow, and eventually, this blog shall detail every aspect of our development phase. Read that now.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/create-metaverse-platform/create-metaverse-platform.png',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/create-metaverse-platform',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Metaverse Development - Create a Customized Metaverse Platform With BlockchainX',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Metaverse is a surreal solution exploring endless possibilities for businesses in the digital world. BlockchainX evolving in the web3 space with our blockchain-based development solution, we have helped many grow, and eventually, this blog shall detail every aspect of our development phase. Read that now.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/create-metaverse-platform/create-metaverse-platform.png',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/create-metaverse-platform'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/create-metaverse-platform'
  );
  this.doc.head.appendChild(link)
;
}

}
