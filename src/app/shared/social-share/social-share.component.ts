import { Component, Input, OnInit } from '@angular/core';
// import { CeiboShare } from 'ng2-social-share';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.css'],
  // directives:[CeiboShare]
})
export class SocialShareComponent implements OnInit {
  // @Input() type: 'facebook' | 'twitter';
  // @Input() shareUrl: string;
  navUrl: string;

  constructor() {}

  ngOnInit() {
    this.createNavigationUrl();
  }

  private createNavigationUrl() {
    // let searchParams = new URLSearchParams();
    // switch (this.type) {
    //   case 'facebook':
    //     searchParams.set('u', this.shareUrl);
    //     this.navUrl =
    //       'https://www.facebook.com/sharer/sharer.php?' + searchParams;
    //     break;
    //   case 'twitter':
    //     searchParams.set('url', this.shareUrl);
    //     this.navUrl = 'https://twitter.com/share?' + searchParams;
    //     break;
    // }
  }

  public share() {
    return window.open(this.navUrl, '_blank');
  }
}
