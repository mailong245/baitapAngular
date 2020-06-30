import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  frm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });

  constructor(private service: PostsService) { }

  ngOnInit() { }

  submitPost(e) {
    e.preventDefault();

    let params = {
      title: this.frm.get('title').value,
      body: this.frm.get('body').value
    };

    this.service.postData(params).subscribe(response => {
      console.log(response);
    });

  }

}
