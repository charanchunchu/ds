import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {
  constructor(private el: ElementRef) {
  }
  @HostListener('click')
  nextFunc() {
    const sliderMain = this.el.nativeElement.parentElement.parentElement.querySelector('.slider-main');
    const items = sliderMain.querySelectorAll('.item');
    const firstItem = items[0];

    sliderMain.removeChild(firstItem);
    sliderMain.appendChild(firstItem);
  }

}
