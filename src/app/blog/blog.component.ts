import { Component, OnInit, Inject } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  blogs_details: OwlOptions = {
    loop: true,
    autoplay: true,
    slideBy: 1,
    margin: 30,
    dots: true,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      740: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
    nav: false,
  };
}
