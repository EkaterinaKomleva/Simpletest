import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getPosts(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getAlbums() {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums`);
  }

  getPhotos(albumId): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }
}
