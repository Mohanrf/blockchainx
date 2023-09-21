import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  public isCollapsed = false;
  menuBtn(event:any){
   event.classList.toggle('bi-x');
 }

 onClick(){
  this.route.navigate(['/contact-us'])
 }
 onClick2(){
  this.route.navigate(['/development-methodology'])
 }
 @HostListener('document:click')
clickout() {
}
}
