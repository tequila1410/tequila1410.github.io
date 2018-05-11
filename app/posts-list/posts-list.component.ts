import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { PostService } from './posts-list.service';
import * as moment from 'moment';
import { ArrayObservable } from 'rxjs/observable/ArrayObservable';


@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.sass']
})
export class PostsListComponent implements OnInit {

  showPostForm = false;
  newPost: Object = {};
  posts;

  constructor(
    private db: AngularFireDatabase,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPosts().map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    }).subscribe(items => {
      this.posts = items;
    });
  }

  /**
   * Show and close form for a new post
   */
  toggleNewPostForm(): void{
    this.showPostForm = !this.showPostForm;
  }

  /**
   * Close post form and create a new post
   */
  createPost(): void {
    this.showPostForm = false;
    this.postService.createPost(this.newPost);
    this.newPost = {};
   }
}
