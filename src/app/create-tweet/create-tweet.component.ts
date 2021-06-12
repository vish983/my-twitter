import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner/progress-spinner';
import Swal from 'sweetalert2';
import { TweetComponent } from '../tweet/tweet.component';


@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css']
})
export class CreateTweetComponent implements OnInit {
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  maxValue = 140;
  progress = 0;
  icon = ['picture-o', 'film', 'signal', 'smile-o', 'calendar'];
  tweetForm = new FormGroup({
    tweet: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {

  }
  chnageFun = (data: any) => {
    this.progress = data.length;
    this.progress = (100 / 140) * this.progress;
    console.log(this.progress);
    // if (this.progress > 100){
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Text greater then 100 not allowed'
    //   });
    // }
  }
  tweetpost = () => {

  }

}
