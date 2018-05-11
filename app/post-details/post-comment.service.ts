import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {
    commentsRef: AngularFireList < any >;
    comments: Observable < any[] >;

    constructor(private db : AngularFireDatabase){
        this.commentsRef = this.db.list('comments/');
    };

    ngOnInit(){};

    /**
     * Get Array of comments
     * @param postId 
     */
    getCommentsByPostId(postId: String): Observable<any[]> {
        this.commentsRef = this.db.list('comments/' + postId);
        this.comments = this.commentsRef.snapshotChanges();
        return this.comments;
    }

    /**
     * Update comment by id
     * @param postId
     * @param post
     */
    updateCommentById(postId: String, comment: any): void {
        this.commentsRef = this.db.list('comments/' + postId);
        this.commentsRef.update(comment.key, { username: comment.username, message: comment.message });
    }

    /**
     * Delete comment by id
     * @param postId
     * @param key
     */
    deleteCommentById(postId: String, key: string): void {
        this.commentsRef = this.db.list('comments/' + postId);
        this.commentsRef.remove(key); 
    }

    /**
     * Add new comment
     * @param comment 
     */
    addComment(comment: any): void {
        this.commentsRef.push({ 
            message: comment.message,
            username: comment.username
        });
      }
}