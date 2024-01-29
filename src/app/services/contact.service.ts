import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl = 'http://localhost/ziola-sendmail/mail.php';
  constructor(private http: HttpClient) {

   }
   registerUser(userDetails: any): Observable<any> {
    const params = new HttpParams()
      .set('email', userDetails.email)
      .set('name', userDetails.name)
      .set('phone', userDetails.phone)
      .set('description', userDetails.description);
      const urlWithParams = `${this.apiUrl}?${params.toString()}`;
    return this.http.post(urlWithParams, userDetails);
  }
}
