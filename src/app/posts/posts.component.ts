import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnChanges {

  @Input() posts;

  constructor() { }

  ngOnChanges() {
    this.renderPosts(this.posts);
  }

  renderPosts(posts) {
    return this.posts;
  }
  //   if (posts[0]) {
  //     this.posts = posts;
  //   } else {
  //     this.posts.push(posts);
  //   }
  //   console.log(this.posts);
  // });
}
