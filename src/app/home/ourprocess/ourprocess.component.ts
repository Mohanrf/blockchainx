import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-ourprocess',
  templateUrl: './ourprocess.component.html',
  styleUrls: ['./ourprocess.component.css'],
})
export class OurprocessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    navSpeed: 500,
    margin: 30,
    dots: false,
    center: true,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      740: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
    nav: false,
  };
}
