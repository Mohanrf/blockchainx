import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-let-discuss',
  templateUrl: './let-discuss.component.html',
  styleUrls: ['./let-discuss.component.css'],
})
export class LetDiscussComponent implements OnInit {
  public path: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.path = this.route.snapshot?.url[0]?.path;
    console.log(this.route.snapshot?.url[0]?.path);
  }
}
