import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
 resButton = ['comment-o', 'retweet', 'heart-o', 'share-square-o'];

  @Input() post: any; // title, desc, id, userId
  @Input() hasPhoto: any;
  @Input() from: any;


  constructor( private localservice: LocalStorageService , private router: Router) {}

  ngOnInit(): void {
   const users = this.localservice.getDataFromLocal('users');
   const foundUser = users.find((a: { id: any; }) => a.id === this.post.userId);
   this.post.userName = foundUser.name;
  }
  goToProfile = () => {
    this.router.navigate(['/profile/' + this.post.userId]);
  }

}
