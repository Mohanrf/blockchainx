import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-advantages-of-nft',
  templateUrl: './advantages-of-nft.component.html',
  styleUrls: ['./advantages-of-nft.component.css']
})
export class AdvantagesOfNftComponent implements OnInit {

  title =
    'The Advantages Of Non-Fungible Tokens (NFTs)';
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
        'There are a lot of advantages of NFTs - Non Fungible Tokens used to develop verifiable digital scarcity and ownership. Here we discuss the benefit of NFTs includes Ownership, Authenticity, Transferability and the advantages of NFTs such as Uniqueness, indivisible,and limited.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Advantages of NFT,NFT benefits,advantages of Non-Fungible Tokens',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'The Advantages Of Non-Fungible Tokens (NFTs)',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://blockchainx.tech/advantages-of-nft',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'There are a lot of advantages of NFTs - Non Fungible Tokens used to develop verifiable digital scarcity and ownership. Here we discuss the benefit of NFTs includes Ownership, Authenticity, Transferability and the advantages of NFTs such as Uniqueness, indivisible,and limited.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/advantages-of-nft.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://blockchainx.tech/advantages-of-nft',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'The Advantages Of Non-Fungible Tokens (NFTs)',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'There are a lot of advantages of NFTs - Non Fungible Tokens used to develop verifiable digital scarcity and ownership. Here we discuss the benefit of NFTs includes Ownership, Authenticity, Transferability and the advantages of NFTs such as Uniqueness, indivisible,and limited.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/blog/advantages-of-nft.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://blockchainx.tech/advantages-of-nft'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://blockchainx.tech/amp/advantages-of-nft'
    );
    this.doc.head.appendChild(link)
;
  }

}
