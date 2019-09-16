import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() postsResponse = new EventEmitter<object>(); // какой тип тут указать?

  posts;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    const input: HTMLInputElement = document.querySelector('input');
    // this.finedById();

    // fromEvent(input, 'keyup').pipe(
    //   debounceTime(1000),
    //   map(event => (event.target as HTMLInputElement).value),
    // ).subscribe((value) => {
    //   if (isNaN(+value)) { value = ''; }    // это и ниже до конца функции надо переместить в корневой компонент
    //   this.finedById(value);
    //   console.log(value);
    // });
  }

  // finedById(value = '') {
  //   this.searchService
  //     .getPosts(value)
  //     .subscribe((response) => {
  //       console.log(response);
  //       this.posts = response;
  //       console.log(this.posts);
  //       this.postsResponse.emit(this.posts);
  //       console.log(this.postsResponse);
  //     });
  // }

}
