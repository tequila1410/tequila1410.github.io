import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Injectable()
export class PostService {
    postRef:  AngularFireObject < any >;
    post : Observable < any >;
    postsRef : AngularFireList < any >;
    posts : Observable < any[] >;
    commentsRef : AngularFireList < any >;
    comments : Observable < any[] >;

    constructor(private db : AngularFireDatabase) {
        this.postsRef = db.list('posts');
        this.posts = this.postsRef.snapshotChanges();
    }

    postIndex : string;

    ngOnInit(){};

    /**
     * Get Array of posts
     */
    getPosts(): Observable<any[]> {
        return this.posts;
    }

    /**
     * Get post by id
     * @param key 
     */
    getPostById(key: string): Observable<any> {
        this.postRef = this.db.object(`posts/${key}`);
        this.post = this.postRef.valueChanges();

        return this.post;
    }

    /**
     * Update post by id
     * @param post
     */
    updatePostById(post: any): void {
        this.postsRef.update(post.key, { title: post.title, description: post.description });
    }

    /**
     * Delete post by id
     * @param key
     */
    deletePostById(key: string): void {
        this.postsRef.remove(key); 
        this.db.list('comments').remove(key);
    }

    /**
     * Create new post
     * @param post 
     */
    createPost(post: any) {
        this.postsRef.push({ 
            date: moment().format("MMM Do YY"),
            description: post.description,
            title: post.title
        });
      }
}