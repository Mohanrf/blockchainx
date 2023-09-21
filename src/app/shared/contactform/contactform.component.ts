import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent  implements OnInit, AfterViewInit {
  @ViewChild('crmForm', { static: false }) div1: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    script.src = `https://formcrm.sparkouttech.com/admin/web-forms/forms/qx35MKWYM6u1FbU2R2OIdlEertt6C8Bj8Gg6RKGnexFFGRg2ur/form.js`;
    this.renderer.appendChild(this.div1?.nativeElement, script);
    // this.renderer.insertBefore(document.body, script,this.div1.nativeElement);
  }
}
