import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavIconsService {
  private jsonUrl = '../../assets/json/plant-specimens.json';
  private plantlist = '../../assets/json/initial-plants.json';

  constructor(private http: HttpClient) { }

  getPlantSpecimens(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
  getInitialSections(): Observable<string[]> {
    return this.http.get<any>(this.plantlist).pipe(
      map(data => Object.keys(data))
    );
  }

  getInitialSection(section: string): Observable<any[]> {
    return this.http.get<any>(this.plantlist).pipe(
      map((data: any) => {
        return data[section] || [];
      })
    );
  }
}
