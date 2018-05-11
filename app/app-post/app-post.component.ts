import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../posts-list/posts-list.service';

@Component({
  selector: 'app-post',
  templateUrl: './app-post.component.html',
  styleUrls: ['./app-post.component.sass'],
  providers: [PostService]
})
export class AppPostComponent implements OnInit {

  edit: boolean = false;

  @Input() post;
  @Input() postIndex;

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {}

  /**
   * Show fild and apply changes of post
   */
  toggleEdit() : void {
    this.edit = !this.edit;
    if(!this.edit)
      this.postService.updatePostById(this.post);
  }

  /**
   * Delete post
   */
  deletePost() : void {
    this.postService.deletePostById(this.post.key);
  }
}
