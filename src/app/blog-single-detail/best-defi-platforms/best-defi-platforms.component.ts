import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';
@Component({
  selector: 'app-best-defi-platforms',
  templateUrl: './best-defi-platforms.component.html',
  styleUrls: ['./best-defi-platforms.component.css']
})
export class BestDefiPlatformsComponent implements OnInit {

  title =
  'Best DeFi Platforms - A Brief Look On Decentralized Finance Platforms Before 2023 | BlockchainX';
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
      'Having a great confusion on which Defi Platform is right? Here are a few norms and checklists that you need to leap on before 2023 for listing your projects on DeFi Platforms. To get a full view to yield better investments read through the whole blog.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'best defi platform, defi platform, defi platform crypto',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Best DeFi Platforms - A Brief Look On Decentralized Finance Platforms Before 2023 | BlockchainX',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/best-defi-platforms-to-consider-before-entering-2023',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Having a great confusion on which Defi Platform is right? Here are a few norms and checklists that you need to leap on before 2023 for listing your projects on DeFi Platforms. To get a full view to yield better investments read through the whole blog.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/Defi-platforms-to-consider-before-2023.png',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/best-defi-platforms-to-consider-before-entering-2023',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Best DeFi Platforms - A Brief Look On Decentralized Finance Platforms Before 2023 | BlockchainX',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Having a great confusion on which Defi Platform is right? Here are a few norms and checklists that you need to leap on before 2023 for listing your projects on DeFi Platforms. To get a full view to yield better investments read through the whole blog.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/Defi-platforms-to-consider-before-2023.png',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/best-defi-platforms-to-consider-before-entering-2023'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/best-defi-platforms-to-consider-before-entering-2023'
  );
  this.doc.head.appendChild(link)
;
}

}
