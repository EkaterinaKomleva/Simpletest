import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

interface PostI {
  body: string;
  id: number;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private searchService: SearchService) {}

  postsResponse: PostI[] = [];

  ngOnInit() {
    this.finedById();
  }

  onEnteredValue(value) {
    this.postsResponse = [];
    if (isNaN(+value)) { value = ''; }
    this.finedById(value);
  }

  finedById(value = '') {
    this.searchService
      .getPosts(value)
      .subscribe({
        next: (response: PostI) => this.recognizeType(response),
        error: (() => alert('Ошибка! Поста с данным Id не существует!'))
      });
  }

  recognizeType(resp) {
    if (Array.isArray(resp)) {
      return this.postsResponse = resp;
    } else {
      return this.postsResponse.push(resp);
    }
  }
}
