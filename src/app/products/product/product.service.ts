import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + btoa('user:5e7131e2-2193-4ca9-9bc7-3206debf0d57'),
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public baseUrl = "http://localhost:3200/api/products/9";
  constructor(private http: HttpClient) {}
  public getProduct(): Observable<any> { 
    return this.http.get(this.baseUrl); 
   }
}
