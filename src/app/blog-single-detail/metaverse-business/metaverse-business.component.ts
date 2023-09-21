import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-metaverse-business',
  templateUrl: './metaverse-business.component.html',
  styleUrls: ['./metaverse-business.component.css']
})
export class MetaverseBusinessComponent implements OnInit {

  title =
  'Top 5 Profitable Metaverse Business opportunities in 2022';
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
      'Metaverse business will play a significant role in reimagining how you live and work. Thus, Now is the best time to start your business opportunities in Metaverse, and this article will help you to find that and build your Metaverse business Today.',
  });
  this.meta.updateTag({
    name: 'keywords',
    content: 'Real business opportunity in metaverse, Business idea around metaverse, Opportunity in the metaverse, Starting a business in metaverse, Metaverse Business opportunity',
  });
  this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
  this.meta.updateTag({ name: 'robots', content: 'index, follow' });

  this.meta.updateTag({
    property: 'og:title',
    content:
      'Top 5 Profitable Metaverse Business opportunities in 2022',
  });
  this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://www.blockchainx.tech/profitable-metaverse-business-opportunities',
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Metaverse business will play a significant role in reimagining how you live and work. Thus, Now is the best time to start your business opportunities in Metaverse, and this article will help you to find that and build your Metaverse business Today.',
  });
  this.meta.updateTag({ property: 'og:type', content: 'Website' });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/Metaverse-business-oppertunities-2022.jpg',
  });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
  this.meta.updateTag({
    name: 'twitter:site',
    content: 'https://www.blockchainx.tech/profitable-metaverse-business-opportunities',
  });
  this.meta.updateTag({
    name: 'twitter:title',
    content:
      'Top 5 Profitable Metaverse Business opportunities in 2022',
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Metaverse business will play a significant role in reimagining how you live and work. Thus, Now is the best time to start your business opportunities in Metaverse, and this article will help you to find that and build your Metaverse business Today.',
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://www.blockchainx.tech/assets-new/images/blog/Metaverse-business-oppertunities-2022.jpg',
  });

  // Add Canonical tag
  this.canonicalService.setCanonicalURL(
    'https://www.blockchainx.tech/profitable-metaverse-business-opportunities'
  );
  this.createLink();
}
createLink() {
  this.canonicalService.destroyLinkForAmpURL();
  let link: HTMLLinkElement = this.doc.createElement('link');
  link.setAttribute('rel', 'amphtml');
  link.setAttribute(
    'href',
    'https://www.blockchainx.tech/amp/profitable-metaverse-business-opportunities'
  );
  this.doc.head.appendChild(link)
;
}

}
