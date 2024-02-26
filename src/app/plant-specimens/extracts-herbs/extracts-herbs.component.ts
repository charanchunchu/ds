import { Component, OnInit } from '@angular/core';
import { NavIconsService } from 'src/app/services/nav-icons.service';

@Component({
  selector: 'app-extracts-herbs',
  templateUrl: './extracts-herbs.component.html',
  styleUrls: ['./extracts-herbs.component.scss']
})
export class ExtractsHerbsComponent implements OnInit {
  navItems: any[] = [];

  constructor(private plantSpecimensService: NavIconsService) {}

  ngOnInit(): void {
    this.plantSpecimensService.extractsherbs().subscribe(data => {
      console.log("Data received:", data);
      this.navItems = data;
    });
  }

  hasField(item: any, fieldName: string): boolean {
    return item.hasOwnProperty(fieldName) && item[fieldName];
  }

  isArrayAction(action: any): boolean {
    return Array.isArray(action);
  }

  isObjectAction(action: any): boolean {
    return typeof action === 'object' && !Array.isArray(action);
  }

  isStringAction(action: any): boolean {
    return typeof action === 'string';
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
