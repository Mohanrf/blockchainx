import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-create-permissioned-blockchain',
  templateUrl: './create-permissioned-blockchain.component.html',
  styleUrls: ['./create-permissioned-blockchain.component.css']
})
export class CreatePermissionedBlockchainComponent implements OnInit {

  title =
  'Permissioned Blockchain Development - Step by Step to guide';
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
      'Wonder how to manage transparency with security in a decentralized space? A permissioned blockchain creation can help in meeting your needs. It is beneficial to the ability to do both. And to know how - explore the blog!',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'permissioned blockchain and its benefits, step-by-step guide on permissioned blockchain, create a permissioned blockchain network',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Permissioned Blockchain Development - Step by Step to guide',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/create-permissioned-blockchain',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Wonder how to manage transparency with security in a decentralized space? A permissioned blockchain creation can help in meeting your needs. It is beneficial to the ability to do both. And to know how - explore the blog!',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://blockchainx.tech/assets-new/images/blog-new/create-permissioned-blockchain/permissioned-blockchain.png',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/create-permissioned-blockchain',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Permissioned Blockchain Development - Step by Step to guide',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Wonder how to manage transparency with security in a decentralized space? A permissioned blockchain creation can help in meeting your needs. It is beneficial to the ability to do both. And to know how - explore the blog!',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://blockchainx.tech/assets-new/images/blog-new/create-permissioned-blockchain/permissioned-blockchain.png',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/create-permissioned-blockchain'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/create-permissioned-blockchain'
  );
  this.doc.head.appendChild(link);
}

}
