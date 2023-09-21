import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-social-token-how-used',
  templateUrl: './social-token-how-used.component.html',
  styleUrls: ['./social-token-how-used.component.css']
})
export class SocialTokenHowUsedComponent implements OnInit {

  title =
  'Social Token Development - Empowering The Community With Super Powers';
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
      'Want to grow your social space? Expand your community and take your brand to newer margins. Or want to curate your individuality into a brand? Develop your social token with BlockchainX. We help you customize your needs and help you contribute to the growth of your brand, community, and business.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: '',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Social Token Development - Empowering The Community With Super Powers',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/social-token-how-used',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Want to grow your social space? Expand your community and take your brand to newer margins. Or want to curate your individuality into a brand? Develop your social token with BlockchainX. We help you customize your needs and help you contribute to the growth of your brand, community, and business.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'http://blockchainx.tech/assets-new/images/blog-new/social-token/social-token-development.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/social-token-how-used',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Social Token Development - Empowering The Community With Super Powers',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Want to grow your social space? Expand your community and take your brand to newer margins. Or want to curate your individuality into a brand? Develop your social token with BlockchainX. We help you customize your needs and help you contribute to the growth of your brand, community, and business. ',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'http://blockchainx.tech/assets-new/images/blog-new/social-token/social-token-development.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/social-token-how-used'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/social-token-how-used'
  );
  this.doc.head.appendChild(link)
;
}

}
