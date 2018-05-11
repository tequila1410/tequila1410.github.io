import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../post-details/post-comment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.sass']
})
export class PostCommentComponent implements OnInit {

  @Input() comment;
  @Input() index: Number;
  @Input() postId: String;
  edit: boolean = false;

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {
    this.postId = route.snapshot.paramMap.get('id')
   }

  ngOnInit() {}

  /**
   * Show fild and apply changes of comment
   */
  handleToggleEditComment(): void {
    this.edit = !this.edit;
    console.log(this.edit);
    if(!this.edit){}
      this.commentService.updateCommentById(this.postId, this.comment);
  }

  /**
   * Delete comment
   */
  handleDeleteComment(): void{
    this.commentService.deleteCommentById(this.postId, this.comment.key);
  }
}
