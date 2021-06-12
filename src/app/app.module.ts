import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { AlbumComponent } from './components/album/album.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { ExploreComponent } from './components/explore/explore.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MessageComponent } from './components/message/message.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { ListComponent } from './components/list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { TweetComponent } from './tweet/tweet.component';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent,
    HomeComponent,
    PostComponent,
    UserComponent,
    AlbumComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    ExploreComponent,
    NotificationComponent,
    MessageComponent,
    BookmarkComponent,
    ListComponent,
    ProfileComponent,
    TweetComponent,
    CreateTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
