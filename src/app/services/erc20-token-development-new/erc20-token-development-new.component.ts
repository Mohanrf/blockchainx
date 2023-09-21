import { Component, Inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CanonicalService } from '../../shared/canonical.service';

@Component({
  selector: 'app-erc20-token-development-new',
  templateUrl: './erc20-token-development-new.component.html',
  styleUrls: ['./erc20-token-development-new.component.css']
})
export class Erc20TokenDevelopmentNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nftOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    dots: false,
    margin: 25,
    autoHeight: true,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },

      1024: {
        items: 3,
      },

      1366: {
        items: 3,
      },
    },
    nav: false,
  };

}
