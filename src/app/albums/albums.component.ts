import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

    private Albums: object[] = [];

    @Input()
    set albums(data) {
        this.Albums = data;
    }
    get albums() {
        // console.log(this.Albums);  // почему консоль 4 раза выводит массив? 
        return this.Albums;
    }
    

    constructor() {}

    ngOnInit() {
        
    }

}