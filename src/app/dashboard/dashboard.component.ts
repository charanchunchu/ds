import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
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
}
