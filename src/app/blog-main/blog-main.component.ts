import { Component, Inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { blogData } from './blog-data';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../shared/canonical.service';
@Component({
  selector: 'app-blog-main',
  templateUrl: './blog-main.component.html',
  styleUrls: ['./blog-main.component.css'],
})
export class BlogMainComponent implements OnInit {
  title = 'Blog | Business with Technology insights - BlockchainX';
  public blogDetails: Array<{ [key: string]: any }> = [];
  public itemsToShow = 6;
  public itemsToLoad = 3;

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    this.blogDetails = blogData;
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content:
        'Blockchain technology is a groundbreaking innovation that has resulted in numerous societal advantages, and this section contains all of the blogs on the topic.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: '',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Blog | Business with Technology insights - BlockchainX',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/blog',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Blockchain technology is a groundbreaking innovation that has resulted in numerous societal advantages, and this section contains all of the blogs on the topic.',
    });
    this.meta.updateTag({ property: 'og:type', content: 'Website' });
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({
      name: 'twitter:site',
      content: 'https://www.blockchainx.tech/blog',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Blog | Business with Technology insights - BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Blockchain technology is a groundbreaking innovation that has resulted in numerous societal advantages, and this section contains all of the blogs on the topic.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',

    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL('https://www.blockchainx.tech/blog');
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', 'https://www.blockchainx.tech/blog');
    this.doc.head.appendChild(link);
  }

  customOptions: OwlOptions = {
    loop: false,
    margin: 30,
    autoplay: true,
    center: false,
    dots: true,
    navSpeed: 700000000000000,
    items: 1,
  };
  showMore() {
    this.itemsToShow += this.itemsToLoad;
  }
}
