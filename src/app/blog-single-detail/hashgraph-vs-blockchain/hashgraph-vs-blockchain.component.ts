import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-hashgraph-vs-blockchain',
  templateUrl: './hashgraph-vs-blockchain.component.html',
  styleUrls: ['./hashgraph-vs-blockchain.component.css'],
})
export class HashgraphVsBlockchainComponent implements OnInit {
  title =
    ' Hashgraph vs Blockchain : Both are major DLT performers. So analyse your needs and then decide which is best for you. Our blog will assist you in this process.';
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
        'Hashgraph vs. blockchain is quite a popular debate these days. Hashgraph and blockchain technologies are somewhat similar. Thus, it only makes sense to compare them. If you know a little bit about blockchain, you will know that it evolves every year at a very rapid pace. Hashgraph is a distributed ledger technology that is a competitor to blockchain. But we dont know which is better for business. This blog will help you figure this out.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Disadvantages of Hashgraph, Advantages of blockchain, Hashgraph vs Blockchain',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Hashgraph vs. blockchain is quite a popular debate these days. Hashgraph and blockchain technologies are somewhat similar. Thus, it only makes sense to compare them. If you know a little bit about blockchain, you will know that it evolves every year at a very rapid pace. Hashgraph is a distributed ledger technology that is a competitor to blockchain. But we dont know which is better for business. This blog will help you figure this out. ',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/hashgraph-vs-blockchain',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Hashgraph vs. blockchain is quite a popular debate these days. Hashgraph and blockchain technologies are somewhat similar. Thus, it only makes sense to compare them. If you know a little bit about blockchain, you will know that it evolves every year at a very rapid pace. Hashgraph is a distributed ledger technology that is a competitor to blockchain. But we dont know which is better for business. This blog will help you figure this out.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/Hashgraph-VS-Blockchain.png',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/hashgraph-vs-blockchain',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        ' Hashgraph vs Blockchain : Both are major DLT performers. So analyse your needs and then decide which is best for you. Our blog will assist you in this process.',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Hashgraph vs. blockchain is quite a popular debate these days. Hashgraph and blockchain technologies are somewhat similar. Thus, it only makes sense to compare them. If you know a little bit about blockchain, you will know that it evolves every year at a very rapid pace. Hashgraph is a distributed ledger technology that is a competitor to blockchain. But we dont know which is better for business. This blog will help you figure this out.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/blog/Hashgraph-VS-Blockchain.png',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/hashgraph-vs-blockchain'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/hashgraph-vs-blockchain'
    );
    this.doc.head.appendChild(link);
  }
}
