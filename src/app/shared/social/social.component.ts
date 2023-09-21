import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent implements OnInit {
  public link: string = '';
  constructor() {}

  ngOnInit(): void {
    this.link = window.location.href;
  }
}
