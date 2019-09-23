import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';

interface PhotoI {
  id: number;
  title: string;
  url: string;
}

@Component({
  selector: 'app-photos-container',
  templateUrl: './photos-container.component.html',
  styleUrls: ['./photos-container.component.scss']
})
export class PhotosContainerComponent implements OnInit {

  id: number;
  photoResponse: object[] = [];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.searchService.getPhotos(this.id)
      .subscribe((response: PhotoI[]) => this.photoResponse = response);
  }

}
