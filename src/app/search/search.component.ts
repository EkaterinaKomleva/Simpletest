import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() enteredValueEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    const input: HTMLInputElement = document.querySelector('input');

    fromEvent(input, 'keyup').pipe(
      debounceTime(1000),
      map((event) => (event.target as HTMLInputElement).value)
    ).subscribe((value) => {
      this.enteredValueEvent.emit(value);
    });
  }
}
