import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-human-biospecimens',
  templateUrl: './human-biospecimens.component.html',
  styleUrls: ['./human-biospecimens.component.scss']
})
export class HumanBiospecimensComponent implements AfterViewInit {
  @ViewChild('slider', { static: true }) slider!: ElementRef<HTMLDivElement>;

  private intervalId: any;

  ngAfterViewInit(): void {
    const track = this.slider.nativeElement.querySelector("[data-slider-track]") as HTMLElement;
    const prev = this.slider.nativeElement.querySelector("[data-slider-prev]") as HTMLElement;
    const next = this.slider.nativeElement.querySelector("[data-slider-next]") as HTMLElement;

    if (track && prev && next) {
      this.updateButtonVisibility(track, prev, next);

      prev.addEventListener("click", () => {
        clearInterval(this.intervalId);
        this.scrollSlider(track, -1);
      });

      next.addEventListener("click", () => {
        clearInterval(this.intervalId);
        this.scrollSlider(track, 1);
      });

      track.addEventListener("scroll", () => {
        this.updateButtonVisibility(track, prev, next);
      });
    }

    this.intervalId = setInterval(() => this.scrollSlider(track, 1), 2000);
  }

  private scrollSlider(track: HTMLElement, direction: number): void {
    track.scrollTo({
      left: track.scrollLeft + direction * ((track.firstElementChild as HTMLElement).offsetWidth || 0),
      behavior: "smooth"
    });
    this.updateButtonVisibility(track);
  }

  private updateButtonVisibility(track: HTMLElement, prev?: HTMLElement, next?: HTMLElement): void {
    const trackScrollWidth = track.scrollWidth;
    const trackOuterWidth = track.clientWidth;

    if (prev && next) {
      prev.removeAttribute("disabled");
      next.removeAttribute("disabled");
    }

    if (prev && track.scrollLeft <= 0) {
      prev.setAttribute("disabled", "");
    }

    if (next && track.scrollLeft === trackScrollWidth - trackOuterWidth) {
      next.setAttribute("disabled", "");
    }

    if (track.scrollLeft === 0) {
      prev?.classList.add('hide-arrow');
    } else {
      prev?.classList.remove('hide-arrow');
    }

    if (track.scrollLeft === trackScrollWidth - trackOuterWidth) {
      next?.classList.add('hide-arrow');
    } else {
      next?.classList.remove('hide-arrow');
    }
  }
}
