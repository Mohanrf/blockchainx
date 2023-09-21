import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    slideBy: 1,
    margin: 30,
    dots: false,
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
