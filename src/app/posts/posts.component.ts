import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  private Posts: object[] = [];

  @Input()
  set posts(data) {
    if (Array.isArray(data)) {
      this.Posts = data;
    } else {
      this.Posts = [data];
    }
  }
  get posts() {
    return this.Posts;
  }

  constructor() { }
}
