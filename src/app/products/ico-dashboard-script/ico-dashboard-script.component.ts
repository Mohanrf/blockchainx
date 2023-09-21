import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-ico-dashboard-script',
  templateUrl: './ico-dashboard-script.component.html',
  styleUrls: ['./ico-dashboard-script.component.css'],
})
export class IcoDashboardScriptComponent implements OnInit {
  title = 'Launch Ready-Made ICO/STO/IEO Dashboard Scripts';
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
        'With the growing opportunities in Blockchain, Crypto started looking for a source to pull investments and funding - BlockchainX can help you customize your ICO/STO/ IEO dashboard scripts with high functionality and efficiency.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Ico/sto script, Ico/sto script software, Ico/sto dashboard script, Ico/sto script for sale, Initial coin offering script',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Launch Ready-Made ICO/STO/IEO Dashboard Scripts',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/ready-made-ico-software',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'With the growing opportunities in Blockchain, Crypto started looking for a source to pull investments and funding - BlockchainX can help you customize your ICO/STO/ IEO dashboard scripts with high functionality and efficiency.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://blockchainx.tech/assets-new/images/og/ico-dashboard-script-og.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/ready-made-ico-software',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Launch Ready-Made ICO/STO/IEO Dashboard Scripts',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'With the growing opportunities in Blockchain, Crypto started looking for a source to pull investments and funding - BlockchainX can help you customize your ICO/STO/ IEO dashboard scripts with high functionality and efficiency.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://blockchainx.tech/assets-new/images/og/ico-dashboard-script-og.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/ready-made-ico-software'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/ready-made-ico-software'
    );
    this.doc.head.appendChild(link);
  }
}
