import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, LoadChildren } from '@angular/router';
import { Location } from '@angular/common';
import {Observable} from 'rxjs/Observable';

import { PostService } from '../posts-list/posts-list.service';
import { CommentService } from './post-comment.service';
import { PostsListComponent } from '../posts-list/posts-list.component';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.sass']
})
export class PostDetailsComponent implements OnInit {
  post: Object = {};
  comments: Array <any[]>;
  newComment: Object = {};

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
     this.postService.getPostById(this.route.snapshot.paramMap.get('id')).subscribe(item => this.post = item);
     this.commentService.getCommentsByPostId(this.route.snapshot.paramMap.get('id')).map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    }).subscribe(items => {
      this.comments = items;
    });
  }

  /**
   * Go to the previous page
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * Create and add a new comment
   */
  addComment(): void {
    this.commentService.addComment(this.newComment);
    this.newComment = {};
  }

}
