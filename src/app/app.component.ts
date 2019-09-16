import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'Simpletest';
  constructor(private searchService: SearchService) {}

  posts;

  ngOnInit() {
    this.finedById();
  }

  finedById(value = '') {
    this.searchService
      .getPosts(value)
      .subscribe((response) => {
        console.log(response);
        this.posts = response;
        console.log(this.posts);
      });
}
}
