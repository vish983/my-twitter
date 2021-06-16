
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { ExploreComponent } from './components/explore/explore.component';
import { HomeComponent } from './components/home/home.component';
import { IndividualTweetComponent } from './components/individual-tweet/individual-tweet.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PostComponent } from './components/post/post.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'album', component: AlbumComponent},
  { path: 'post', component: PostComponent},
  { path: 'tweet/:id' , component: IndividualTweetComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'bookmark', component: BookmarkComponent},
  { path: 'explore', component: ExploreComponent},
  { path: 'notification', component: NotificationComponent},
  { path: 'list', component: ListComponent},
  { path: 'message', component: MessageComponent},
  { path: 'profile/:username', component: ProfileComponent},
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
