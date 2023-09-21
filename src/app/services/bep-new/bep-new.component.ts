import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bep-new',
  templateUrl: './bep-new.component.html',
  styleUrls: ['./bep-new.component.css'],
})
export class BepNewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tokenOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    dots: false,
    autoHeight: true,
    margin: 25,
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
