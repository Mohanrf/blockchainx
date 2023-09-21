import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-best-metaverse-know-about',
  templateUrl: './best-metaverse-know-about.component.html',
  styleUrls: ['./best-metaverse-know-about.component.css']
})
export class BestMetaverseKnowAboutComponent implements OnInit {

  title =
  'Best Metaverse Platform to Know About in 2023';
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
      'This meta world is innovative and takes our lives to greater heights. Monetization of digital assets and virtual real estate is just the beginning for Metaverse. There is so much unrealized potential in Metaverse. Discover the possibilities and choose the best Metaverse platform to create your avatars in the booming Metaverse ecosystem.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'top metaverse platform in 2023, top 10 metaverse platform, best metaverse platform',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Best Metaverse Platform to Know About in 2023',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/best-metaverse-platform-to-know-about-in-2023',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'This meta world is innovative and takes our lives to greater heights. Monetization of digital assets and virtual real estate is just the beginning for Metaverse. There is so much unrealized potential in Metaverse. Discover the possibilities and choose the best Metaverse platform to create your avatars in the booming Metaverse ecosystem.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/blockbuster-metaverse-platforms-of-2023.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/best-metaverse-platform-to-know-about-in-2023',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Best Metaverse Platform to Know About in 2023',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'This meta world is innovative and takes our lives to greater heights. Monetization of digital assets and virtual real estate is just the beginning for Metaverse. There is so much unrealized potential in Metaverse. Discover the possibilities and choose the best Metaverse platform to create your avatars in the booming Metaverse ecosystem.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/blockbuster-metaverse-platforms-of-2023.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/best-metaverse-platform-to-know-about-in-2023'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/best-metaverse-platform-to-know-about-in-2023'
  );
  this.doc.head.appendChild(link)
;
}

}
