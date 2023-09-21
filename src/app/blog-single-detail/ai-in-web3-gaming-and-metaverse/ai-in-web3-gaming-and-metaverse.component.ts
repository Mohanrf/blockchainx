import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-ai-in-web3-gaming-and-metaverse',
  templateUrl: './ai-in-web3-gaming-and-metaverse.component.html',
  styleUrls: ['./ai-in-web3-gaming-and-metaverse.component.css']
})
export class AiInWeb3GamingAndMetaverseComponent implements OnInit {

  title =
  'AI In Web3 Games And Metaverse - Evolution For The Better ';
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
      'Secured way to integrate Cold Wallet for all kinds of Cryptocurrency Exchange Software with Ready-made cold wallet integration system.The global adaptations are heading into digital structures. AI and Blockchain in Web3 have a great influence. Especially in shaping gaming and metaverse. There are a lot of advancements and advantages with AI in web3 games, and the metaverse explores its capabilities here.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'ai in web3, ai in metaverse, blockchain in metaverse, ai in the web3 game, ai and blockchain in web3, blockchain and ai in web games ',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'AI In Web3 Games And Metaverse - Evolution For The Better ',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/ai-blockchain-web3-revolutionizing-gaming-metaverse',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'The global adaptations are heading into digital structures. AI and Blockchain in Web3 have a great influence. Especially in shaping gaming and metaverse. There are a lot of advancements and advantages with AI in web3 games, and the metaverse explores its capabilities here.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://blockchainx.tech/assets-new/images/blog-new/ai-in-web3-gaming-and-metaverse.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/ai-blockchain-web3-revolutionizing-gaming-metaverse',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'AI In Web3 Games And Metaverse - Evolution For The Better ',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'The global adaptations are heading into digital structures. AI and Blockchain in Web3 have a great influence. Especially in shaping gaming and metaverse. There are a lot of advancements and advantages with AI in web3 games, and the metaverse explores its capabilities here.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://blockchainx.tech/assets-new/images/blog-new/ai-in-web3-gaming-and-metaverse.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/ai-blockchain-web3-revolutionizing-gaming-metaverse'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/ai-blockchain-web3-revolutionizing-gaming-metaverse'
  );
  this.doc.head.appendChild(link)
;
}

}
