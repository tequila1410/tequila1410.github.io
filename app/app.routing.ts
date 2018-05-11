import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

export const AppRoutes: Routes = [
    {path: '', component: LoginComponent},
    // {path: '', redirectTo: '/blog', pathMatch: 'full'},
    {path: 'blog', component: PostsListComponent},
    {path: 'post/:id', component: PostDetailsComponent}
]

	
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);