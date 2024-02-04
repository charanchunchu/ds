import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number;

  constructor(public router: Router) {
    this.currentYear = new Date().getFullYear();
  }
  Privacy() {
    this.router.navigate(['/privacy-policy']);
    window.scrollTo(0, 1);
  }
  terms(){
    this.router.navigate(['/terms-condition']);
    window.scrollTo(0, 1);
  }
}
