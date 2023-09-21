import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-blockchain-identity-management',
  templateUrl: './blockchain-identity-management.component.html',
  styleUrls: ['./blockchain-identity-management.component.css']
})
export class BlockchainIdentityManagementComponent implements OnInit {

  title =
  'Carrying Digital Identities In The Cradles Of Blockchain - Impact Or Just Influential?';
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
      'Identities are recognition for once existence, and now if you could source accurately never like, then thanks to the massive growth of digital developments. Yet have you discovered how influential the blockchain networks are on digital identities in recent times? Scroll to explore.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'Digital identity of blockchain, Blockchain identity management, Cardles of blockchain, influential  Blockchain, Blockchain management',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Carrying Digital Identities In The Cradles Of Blockchain - Impact Or Just Influential?',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/blockchain-influences-identity-management',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Identities are recognition for once existence, and now if you could source accurately never like, then thanks to the massive growth of digital developments. Yet have you discovered how influential the blockchain networks are on digital identities in recent times? Scroll to explore.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/digital-identities.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/blockchain-influences-identity-management',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Carrying Digital Identities In The Cradles Of Blockchain - Impact Or Just Influential?',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Identities are recognition for once existence, and now if you could source accurately never like, then thanks to the massive growth of digital developments. Yet have you discovered how influential the blockchain networks are on digital identities in recent times? Scroll to explore.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/digital-identities.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/blockchain-influences-identity-management'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/blockchain-influences-identity-management'
  );
  this.doc.head.appendChild(link)
;
}

}
