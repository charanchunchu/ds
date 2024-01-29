import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {
  constructor(private el: ElementRef) { }
  @HostListener('click')
  prevFunc() {
    const sliderMain = this.el.nativeElement.parentElement.parentElement.querySelector('.slider-main');
    const items = sliderMain.querySelectorAll('.item');
    const lastItem = items[items.length - 1];

    sliderMain.removeChild(lastItem);
    sliderMain.insertBefore(lastItem, sliderMain.firstChild);
  }
}
