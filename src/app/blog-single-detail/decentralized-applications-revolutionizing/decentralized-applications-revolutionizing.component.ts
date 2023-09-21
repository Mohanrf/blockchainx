import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-decentralized-applications-revolutionizing',
  templateUrl: './decentralized-applications-revolutionizing.component.html',
  styleUrls: ['./decentralized-applications-revolutionizing.component.css']
})
export class DecentralizedApplicationsRevolutionizingComponent implements OnInit {

  title =
    'DApps Scaling The Possibilities of IoT, & Redefining The Future ';
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
        'The future of IoT with Decentralization seems to grab the global Attention says and claims a lot of technophiles, and in meantime while you think of it, give this a read to take a stand on Dapps influencing the future of Internet of things.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'future of IoT, future applications of IoT, IoT future predictions, future of Internet of Things',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content:
        'DApps Scaling The Possibilities of IoT, & Redefining The Future ',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/decentralized-applications-revolutionizing-future-iot',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'The future of IoT with Decentralization seems to grab the global Attention says and claims a lot of technophiles, and in meantime while you think of it, give this a read to take a stand on Dapps influencing the future of Internet of things.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://blockchainx.tech/assets-new/images/blog-new/decentralized-applications/decentralized-applications-the-future-of-IoT.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/decentralized-applications-revolutionizing-future-iot',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'DApps Scaling The Possibilities of IoT, & Redefining The Future',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'The future of IoT with Decentralization seems to grab the global Attention says and claims a lot of technophiles, and in meantime while you think of it, give this a read to take a stand on Dapps influencing the future of Internet of things.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://blockchainx.tech/assets-new/images/blog-new/decentralized-applications/decentralized-applications-the-future-of-IoT.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/decentralized-applications-revolutionizing-future-iot'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute(
      'href',
      'https://www.blockchainx.tech/amp/decentralized-applications-revolutionizing-future-iot'
    );
    this.doc.head.appendChild(link)
;
  }

}
