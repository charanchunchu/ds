import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public router: Router) {}
  about(){
    this.router.navigate(['/about-us']);
    window.scrollTo(0,1);
  }
  human(){
    this.router.navigate(['/human-biospecimens']);
    window.scrollTo(0,1);
  }plant(){
    this.router.navigate(['/plant-specimens']);
    window.scrollTo(0,1);
  }contact(){
    this.router.navigate(['/contact-us']);
    window.scrollTo(0,1);
  }dashboard(){
    this.router.navigate(['/dashboard']);
    window.scrollTo(0,1);
  }
}
