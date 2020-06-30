import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';

const routes: Routes = [
  { path:'posts', component: PostListComponent},
  { path:'post/add', component: PostAddComponent},
  { path:'post/update/:id', component: PostUpdateComponent },
  { path:'', component: PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
