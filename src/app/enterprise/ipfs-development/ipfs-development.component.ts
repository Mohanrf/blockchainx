import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-ipfs-development',
  templateUrl: './ipfs-development.component.html',
  styleUrls: ['./ipfs-development.component.css'],
})
export class IpfsDevelopmentComponent implements OnInit {
  title =
    'IPFS Blockchain development company - Build a more secure and reliable data storage system with IPFS blockchain development | BlockchainX';
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
        'Looking for a reliable IPFS development company? We at BlockchainX specialize in developing decentralized IPFS applications that ensure faster & more secure content delivery. With our experts, we will make sure that your business process benefits from high output & excellent security facilities.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'ipfs development company, ipfs blockchain development, ipfs blockchain development services, ipfs blockchain development company ',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'IPFS Blockchain development company - Build a more secure and reliable data storage system with IPFS blockchain development | BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://blockchainx.tech/ipfs-blockchain',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Looking for a reliable IPFS development company? We at BlockchainX specialize in developing decentralized IPFS applications that ensure faster & more secure content delivery. With our experts, we will make sure that your business process benefits from high output & excellent security facilities.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/ipfs-development.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://blockchainx.tech/ipfs-blockchain',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'IPFS Blockchain development company - Build a more secure and reliable data storage system with IPFS blockchain development | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Looking for a reliable IPFS development company? We at BlockchainX specialize in developing decentralized IPFS applications that ensure faster & more secure content delivery. With our experts, we will make sure that your business process benefits from high output & excellent security facilities.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/ipfs-development.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://blockchainx.tech/ipfs-blockchain'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', 'https://blockchainx.tech/ipfs-blockchain');
    this.doc.head.appendChild(link);
  }
}
