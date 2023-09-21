import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-blockchain-rust',
  templateUrl: './blockchain-rust.component.html',
  styleUrls: ['./blockchain-rust.component.css']
})
export class BlockchainRustComponent implements OnInit {

  title =
  'Rust In Blockchain - Discover Better Ways To Progress In The Era Of Automation and Digitalization';
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
      'Unlike other programming languages, Rust has proven to be beneficial, quick, and precise in all its endeavors and  actions. You can now manifest the abilities of Rust in blockchain applications with us. Before that read more to explore.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'Rust Blockchain, Rust for Blockchain',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Rust In Blockchain - Discover Better Ways To Progress In The Era Of Automation and Digitalization',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/implementation-of-rust-for-blockchain-network',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Unlike other programming languages, Rust has proven to be beneficial, quick, and precise in all its endeavors and  actions. You can now manifest the abilities of Rust in blockchain applications with us. Before that read more to explore.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/Rust-In-Blockchain.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/implementation-of-rust-for-blockchain-network',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Rust In Blockchain - Discover Better Ways To Progress In The Era Of Automation and Digitalization',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Unlike other programming languages, Rust has proven to be beneficial, quick, and precise in all its endeavors and  actions. You can now manifest the abilities of Rust in blockchain applications with us. Before that read more to explore.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/Rust-In-Blockchain.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/implementation-of-rust-for-blockchain-network'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/implementation-of-rust-for-blockchain-network'
  );
  this.doc.head.appendChild(link)
;
}

}
