import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RootComponent } from './root/root.component';
import { ROUTING } from './app.routing';
import { LoginComponent } from './login/login.component';
import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { PostsListComponent } from './posts-list/posts-list.component';

import { PostService } from './posts-list/posts-list.service';
import { CommentService } from './post-details/post-comment.service';
import { AppPostComponent } from './app-post/app-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostCommentComponent } from './post-comment/post-comment.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    AppNavbarComponent,
    AppFooterComponent,
    PostsListComponent,
    AppPostComponent,
    PostDetailsComponent,
    PostCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    PostService,
    CommentService
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
