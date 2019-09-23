import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PostsComponent } from './posts/posts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlbumsComponent } from './albums/albums.component';

import { SearchService } from './search.service';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { AlbumsContainerComponent } from './albums-container/albums-container.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotosContainerComponent } from './photos-container/photos-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PostsComponent,
    SidebarComponent,
    AlbumsComponent,
    PostsContainerComponent,
    AlbumsContainerComponent,
    PhotosComponent,
    PhotosContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})

export class AppModule { }
