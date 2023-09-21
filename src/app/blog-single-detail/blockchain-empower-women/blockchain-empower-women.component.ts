import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-blockchain-empower-women',
  templateUrl: './blockchain-empower-women.component.html',
  styleUrls: ['./blockchain-empower-women.component.css']
})
export class BlockchainEmpowerWomenComponent implements OnInit {

  title =
  'How can blockchain empower and enrich womens lives in 2022';
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
      'The role of women in blockchain technology is undeniable and the space is full of possibilities. In this blog, we bring you something unique on this year’s International Women’s day to celebrate the essence of womanhood. We introduce you to some leading women in blockchain space, their contributions, and the opportunities to explore. Read on to know more.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'How Blockchain Empowers Women, How Blockchain is empowering Women, Role of Blockchain in Women Empowerment, Ways Blockchain Can Empower Women Worldwide',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'How can blockchain empower and enrich womens lives in 2022',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/how-can-blockchain-empower-and-enrich-women',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'The role of women in blockchain technology is undeniable and the space is full of possibilities. In this blog, we bring you something unique on this year’s International Women’s day to celebrate the essence of womanhood. We introduce you to some leading women in blockchain space, their contributions, and the opportunities to explore. Read on to know more.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/women-role-blockchain.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/how-can-blockchain-empower-and-enrich-women',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'How can blockchain empower and enrich womens lives in 2022',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'The role of women in blockchain technology is undeniable and the space is full of possibilities. In this blog, we bring you something unique on this year’s International Women’s day to celebrate the essence of womanhood. We introduce you to some leading women in blockchain space, their contributions, and the opportunities to explore. Read on to know more.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/women-role-blockchain.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/how-can-blockchain-empower-and-enrich-women'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/how-can-blockchain-empower-and-enrich-women'
  );
  this.doc.head.appendChild(link)
;
}

}
