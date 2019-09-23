import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

interface AlbumI {
  id: number;
  title: string;
}

@Component({
  selector: 'app-albums-container',
  templateUrl: './albums-container.component.html',
  styleUrls: ['./albums-container.component.scss']
})
export class AlbumsContainerComponent implements OnInit {

  albumsResponse: AlbumI[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getAlbums()
      .subscribe((response: AlbumI[]) => this.albumsResponse = response);
  }
}

