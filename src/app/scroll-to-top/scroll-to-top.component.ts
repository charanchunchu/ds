import { Component, OnInit, Inject, HostListener, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {
  windowScrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document, private ngZone: NgZone) {
    this.windowScrolled = false;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.ngZone.run(() => {
      const scrollingElement = document.scrollingElement || document.documentElement || document.body;
      const scrollPosition = scrollingElement ? scrollingElement.scrollTop || 0 : 0;

      if (scrollPosition > 100) {
        this.windowScrolled = true;
      } else if (this.windowScrolled && scrollPosition < 10) {
        this.windowScrolled = false;
      }
    });
  }

  scrollToTop() {
    const scrollingElement = document.scrollingElement || document.documentElement || document.body;
    scrollingElement.scrollTop = 0;
  }

  ngOnInit() {}
}
