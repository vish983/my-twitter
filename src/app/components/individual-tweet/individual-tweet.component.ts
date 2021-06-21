import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-individual-tweet',
  templateUrl: './individual-tweet.component.html',
  styleUrls: ['./individual-tweet.component.css']
})
export class IndividualTweetComponent implements OnInit {
  postDetail: any = null;
  allComment: any;
  userComment: any;
  item: any;
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    const id: number = Number(window.location.pathname.split('/')[2]);
    this.apiservice.getPost(id).subscribe(res => {
      this.postDetail = res;
      console.log(this.postDetail);

      // call the comment

      this.apiservice.getAllComments().subscribe(res => {
        this.allComment = res;
        const comment = this.allComment.filter((temp: { postId: any; }) => temp.postId === this.postDetail.id);
        this.userComment = comment;
        console.log(this.userComment);
      });
    });

  }

}
