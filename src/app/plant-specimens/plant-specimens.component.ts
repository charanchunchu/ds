import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PlantPopupComponent } from './plant-popup/plant-popup.component';
import { NavIconsService } from '../services/nav-icons.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-plant-specimens',
  templateUrl: './plant-specimens.component.html',
  styleUrls: ['./plant-specimens.component.scss']
})
export class PlantSpecimensComponent implements AfterViewInit {
  navItems: any[] = [];
  @ViewChild('slider', { static: true }) slider!: ElementRef<HTMLDivElement>;

  private intervalId: any;
  constructor(private plantSpecimensService: NavIconsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.plantSpecimensService.getPlantSpecimens().subscribe(data => {
      this.navItems = data;
    });
  }

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
  openPopup(item: any): void {
    this.dialog.open(PlantPopupComponent, {
      data: {
        title: `Plant ${item.id}: ${item['botanical-name']}`,
        content: `Description: ${item.description}`,
        img: item.img,
        'botanical-name': item['botanical-name'],
        'family-name': item['family-name'],
        'common-name': item['common-name'],
        'part-used': item['part-used'],
        habitat: item['habitat'],
        'product-offered': item['product-offered'],
        uses: item['uses'],
      },
    });
  }
}
