import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  show: boolean = false;
  posts: Object;

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.service.getAllPosts().subscribe(data => {
      this.posts = data;
      this.show = true;
    });
  }

  deletePost(id: Number) {
    this.service.deletePost(id).subscribe(data => {
      console.log(data);
    });
  }
}
