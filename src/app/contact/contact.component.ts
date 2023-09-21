import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../shared/canonical.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('crmForm', { static: false }) div1: ElementRef;
  title = 'Contact us | BlockchainX';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonicalService: CanonicalService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: Document
  ) {}
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'description',
      content:
        'To discuss your project or ideas, please contact BlockchainX. Our team of experts will work with you to understand your business objectives & set up early milestones.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: '',
    });
    this.meta.updateTag({ name: 'author', content: 'BlockchainX' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Contact us | BlockchainX ',
    });
    this.meta.updateTag({ property: 'og:site_name', content: 'BlockchainX' });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.blockchainx.tech/contact',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'To discuss your project or ideas, please contact BlockchainX. Our team of experts will work with you to understand your business objectives & set up early milestones.',
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
      content: 'https://www.blockchainx.tech/contact',
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Contact us | BlockchainX',
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'To discuss your project or ideas, please contact BlockchainX. Our team of experts will work with you to understand your business objectives & set up early milestones.',
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://www.blockchainx.tech/assets-new/images/og/blockchainx-og.jpg',
    });

    // Add Canonical tag
    this.canonicalService.setCanonicalURL(
      'https://www.blockchainx.tech/contact'
    );
    this.createLink();
  }
  createLink() {
    this.canonicalService.destroyLinkForAmpURL();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'amphtml');
    link.setAttribute('href', 'https://www.blockchainx.tech/contact');
    this.doc.head.appendChild(link);
  }

  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    script.src = `https://formcrm.sparkouttech.com/admin/web-forms/forms/qx35MKWYM6u1FbU2R2OIdlEertt6C8Bj8Gg6RKGnexFFGRg2ur/form.js`;
    this.renderer.appendChild(this.div1?.nativeElement, script);
    // this.renderer.insertBefore(document.body, script,this.div1.nativeElement);
  }
}
