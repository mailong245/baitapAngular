import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../models/Posts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  JSON_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Posts> {
    return this.http.get<Posts>(this.JSON_URL);
  }

  postData(params: any): Observable<Posts> {
    return this.http.post<Posts>(this.JSON_URL, { params });
  }

  updatePost(id: Number, params: Object = {}): Observable<Posts> {
    let url = `${this.JSON_URL}/${id}`;
    console.log(url);
    return this.http.put<Posts>(url, { params });
  }

  deletePost(id: Number) {
    let url = `${this.JSON_URL}/${id}`;
    return this.http.delete(url);
  }

}
