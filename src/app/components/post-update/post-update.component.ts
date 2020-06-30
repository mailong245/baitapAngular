import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  frm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });
  postId: Number = 0;
  constructor(private service: PostsService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = parseInt(params.get('id'));
    });
  }
  updatePost(e) {
    e.preventDefault();
    let params = {
      title: this.frm.get('title').value,
      body: this.frm.get('body').value
    };
    this.service.updatePost(this.postId, params).subscribe(response => {
      console.log(response);
    });
  }

}
