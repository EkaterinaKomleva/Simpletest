import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getPosts(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
