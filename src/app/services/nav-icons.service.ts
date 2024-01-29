// nav-icons.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavIconsService {
  private jsonUrl = '../../assets/json/plant-specimens.json';

  constructor(private http: HttpClient) { }

  getPlantSpecimens(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
