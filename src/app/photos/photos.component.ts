import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @Input()
  set photos(data) {
    this.currentPhotos = data;
  }
  get photos() {
    return this.currentPhotos;
  }

  constructor() { }

  currentPhotos: object[] = [];

  ngOnInit() {
  }

}
