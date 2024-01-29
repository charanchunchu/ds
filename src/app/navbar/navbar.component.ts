import { Component, ElementRef, HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  sticky = false;
  yourHeader: any;
  constructor(private el: ElementRef) { }
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll > this.yourHeader) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  ngAfterViewInit() {
    this.yourHeader = this.el.nativeElement.querySelector('.header').offsetHeight;
  }
}
