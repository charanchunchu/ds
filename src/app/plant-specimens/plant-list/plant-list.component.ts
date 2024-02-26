import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { NavIconsService } from 'src/app/services/nav-icons.service';
import { PlantPopupComponent } from '../plant-popup/plant-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent {
  @ViewChildren('imgList') imgLists!: QueryList<ElementRef>;
  sections: string[] = [];
  sectionDataMap: { [key: string]: Observable<any[]> } = {};
  @ViewChildren('slider') sliders!: QueryList<ElementRef<HTMLDivElement>>;
  private intervalIds: any[] = [];

  constructor(private navIconsService: NavIconsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.navIconsService.getInitialSections().subscribe(keys => {
      this.sections = keys;
      this.sections.forEach(section => {
        this.sectionDataMap[section] = this.navIconsService.getInitialSection(section);
      });
    });
  }

  scrollRight(index: number): void {
    const element = this.imgLists.toArray()[index].nativeElement;
    element.scrollBy(750, 0);
  }
  
  scrollLeft(index: number): void {
    const element = this.imgLists.toArray()[index].nativeElement;
    element.scrollBy(-750, 0);
  }
  
  
  openPopup(item: any): void {
    this.dialog.open(PlantPopupComponent, {
      data: {
        title: `Plant ${item.id}: ${item['plant-botanical-name']}`,
        content: `Description: ${item.description}`,
        img: item.img,
        'plant-botanical-name': item['plant-botanical-name'],
        'plant-family-name': item['plant-family-name'],
        'plant-common-names': item['plant-common-names'],
        'plant-parts-used': item['plant-parts-used'],
        predominantly: item['predominantly'],
        'product-offered': item['product-offered'],
        uses: item['uses'],
      },
    });
  }
}
