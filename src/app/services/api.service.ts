import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  allUser = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
