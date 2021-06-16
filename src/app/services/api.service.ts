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

  // getting posts
  getAllPost = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  // getting posts
  getPost = (id: number) => {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }
  getAllAlbum = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }
  getAllphotos = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
