import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-starcard-sports-games',
  templateUrl: './starcard-sports-games.component.html',
  styleUrls: ['./starcard-sports-games.component.css'],
})
export class StarcardSportsGamesComponent implements OnInit {
  title =
    'Start card Sports | Bridging the digital divide for athletes - BlockchainX';
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
        'Check out our Starcard Sports, a blockchain-based play-to-earn game platform, and join us in a new phase of widespread adoption in the world of play-to-earn sports gaming.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Blockchain, Distributed Ledgers, Blockchain Technology, Cryptocurrency, Enterprise Technology, Cryptocurrency',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Start card Sports | Bridging the digital divide for athletes - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/starcard-sports-games',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Check out our Starcard Sports, a blockchain-based play-to-earn game platform, and join us in a new phase of widespread adoption in the world of play-to-earn sports gaming.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/starcard-sports-games',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Start card Sports | Bridging the digital divide for athletes - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Check out our Starcard Sports, a blockchain-based play-to-earn game platform, and join us in a new phase of widespread adoption in the world of play-to-earn sports gaming.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/starcard-sports-games'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/starcard-sports-games'
    );
    this.doc.head.appendChild(link);
  }
}
