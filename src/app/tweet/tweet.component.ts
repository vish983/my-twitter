import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
 resButton = ['comment-o', 'retweet', 'heart-o', 'share-square-o'];

  @Input() post: any;
  @Input() hasPhoto: any;
  @Input() from: any;


  constructor() {

  }

  ngOnInit(): void {
  }

}
