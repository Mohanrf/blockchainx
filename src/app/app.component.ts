import { Component, HostListener, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

import { TITLE_PROVIDER } from './title-provider';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public defaultTitle: string = 'BlockchainX';

  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private ngxService: NgxUiLoaderService
  ) {
    // set dynamic title and meta from title provider service
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log(event, 'event');
        console.log(TITLE_PROVIDER[event.url]?.meta);

        this.titleService.setTitle(
          TITLE_PROVIDER[event.url]
            ? TITLE_PROVIDER[event.url].title
            : this.defaultTitle
        );
        TITLE_PROVIDER[event.url]?.meta.forEach((cur: any) => {
          this.meta.updateTag(cur);
        });
        // this.meta.addTags(TITLE_PROVIDER[event.url] ? (TITLE_PROVIDER[event.url].meta) : [],false);
      }
    });
  }
  ngOnInit() {
    this.ngxService.start();
    document.addEventListener('touchstart', this.onTouchStart, {
      passive: true,
    });
  }
  onTouchStart() {}

  show = false;
  fullScreen = true;
  template = ``;
}
