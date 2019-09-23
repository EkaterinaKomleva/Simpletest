import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { AlbumsContainerComponent } from './albums-container/albums-container.component';
import { PhotosContainerComponent } from './photos-container/photos-container.component';

const routes: Routes = [
    {
      path: ' ',
      redirectTo: 'posts',
      pathMatch: 'full'
    },
    {
      path: 'posts',
      component: PostsContainerComponent
    },
    {
      path: 'albums',
      component: AlbumsContainerComponent
    },
    {
      path: 'album/:id',
      component: PhotosContainerComponent
    }
    // {path: 'albums/1/photos', component: AlbumsComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }