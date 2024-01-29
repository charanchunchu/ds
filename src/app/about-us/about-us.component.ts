import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements AfterViewInit, OnInit {
  @ViewChild('slider', { static: true }) slider!: ElementRef<HTMLDivElement>;
  activeTab = 'home';
  projectcount: number = 0;
  accuratecount: number = 0;
  clientcount: number = 0;
  customerfeedback: number = 0;
  startCounting: boolean = false;
  counters: { property: keyof DashboardComponent; target: number; interval?: any }[] = [
    { property: 'projectcount', target: 1492 },
    { property: 'accuratecount', target: 152 },
    { property: 'clientcount', target: 1022 },
    { property: 'customerfeedback', target: 24332 }
  ];
  @ViewChild('counterSection') counterSection: ElementRef | undefined;
  constructor(private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }
  setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.startCounting) {
          this.startCounting = true;
          this.startCounters();
        } else if (!entry.isIntersecting && this.startCounting) {
          this.startCounting = false;
          this.stopCounters();
        }
      });
    }, options);
    if (this.counterSection) {
      observer.observe(this.counterSection.nativeElement);
    }
  }
  startCounters(): void {
    this.projectcount = 1340;
    this.accuratecount = 0;
    this.clientcount = 870;
    this.customerfeedback = 24180;
    this.counters.forEach(counter => {
      counter.interval = setInterval(() => {
        if (this.startCounting) {
          this[counter.property]++;
          if (this[counter.property] === counter.target) {
            clearInterval(counter.interval);
          }
        }
      }, 10);
    });
  }
  stopCounters(): void {
    this.counters.forEach(counter => {
      clearInterval(counter.interval);
    });
  }
  changeTab(tab: string): void {
    this.activeTab = tab;
  }
  ngOnInit(): void {
    const track = this.slider.nativeElement.querySelector("[data-slider-track]");
    const prev = this.slider.nativeElement.querySelector("[data-slider-prev]");
    const next = this.slider.nativeElement.querySelector("[data-slider-next]");
    if (track && prev && next) {
      this.updateButtonVisibility(track as HTMLElement, prev as HTMLElement, next as HTMLElement);
      prev.addEventListener("click", () => {
        next.removeAttribute("disabled");
        track.scrollTo({
          left: track.scrollLeft - ((track.firstElementChild as HTMLElement).offsetWidth || 0),
          behavior: "smooth"
        });
        this.updateButtonVisibility(track as HTMLElement, prev as HTMLElement, next as HTMLElement);
      });
      next.addEventListener("click", () => {
        prev.removeAttribute("disabled");
        track.scrollTo({
          left: track.scrollLeft + ((track.firstElementChild as HTMLElement).offsetWidth || 0),
          behavior: "smooth"
        });
        this.updateButtonVisibility(track as HTMLElement, prev as HTMLElement, next as HTMLElement);
      });
      track.addEventListener("scroll", () => {
        this.updateButtonVisibility(track as HTMLElement, prev as HTMLElement, next as HTMLElement);
      });
    }
  }
  private updateButtonVisibility(track: HTMLElement, prev: HTMLElement, next: HTMLElement): void {
    const trackScrollWidth = track.scrollWidth;
    const trackOuterWidth = track.clientWidth;
    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");
    if (track.scrollLeft <= 0) {
      prev.setAttribute("disabled", "");
    }
    if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
      next.setAttribute("disabled", "");
    }
    if (track.scrollLeft === 0) {
      prev.classList.add('hide-arrow');
    } else {
      prev.classList.remove('hide-arrow');
    }
    if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
      next.classList.add('hide-arrow');
    } else {
      next.classList.remove('hide-arrow');
    }
  }
}
