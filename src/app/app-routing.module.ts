import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';

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
      component: AlbumsComponent
    },
    // {path: 'albums/1/photos', component: AlbumsComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }