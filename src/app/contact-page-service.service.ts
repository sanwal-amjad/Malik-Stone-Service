import { Injectable } from '@angular/core';
import {environment} from './../environments/environment';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, ObservableLike } from 'rxjs';
import {Policy} from './policy'
@Injectable({
  providedIn: 'root'
})
export class ContactPageServiceService {
  apiUrl= environment.baseApiUrl;
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  contactPageUrl = this.apiUrl + '/clientInformation'; 
 
  link = this.apiUrl +  "/reset-password"
  constructor(private http: HttpClient, public router: Router) { }

  public mailSending = (obj: any): any => {
    return this.http.post(`${this.contactPageUrl}/email-to-backEnd`, obj, this.httpHeader);
   }

   public sendComment = (obj: any): any => {
    return this.http.post(`${this.contactPageUrl}/comment-to-backEnd`, obj, this.httpHeader);
   }
   getComments = ()=>{
    return this.http.get(`${this.contactPageUrl}/get-comments`);
  }

  // php

    PHP_API_SERVER = "http://127.0.0.1:8080";

    createPolicy(policy: Policy): Observable<Policy>{
      return this.http.post<Policy>(`${this.PHP_API_SERVER}/api/create.php`, policy);
    }
}
