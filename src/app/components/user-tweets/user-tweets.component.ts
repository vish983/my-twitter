import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-tweets',
  templateUrl: './user-tweets.component.html',
  styleUrls: ['./user-tweets.component.css']
})
export class UserTweetsComponent implements OnInit {
 postDataArray: any;


 @Input() id: any;


  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.apiservice.getAllPost().subscribe(res => {
       let allPost: any;
       allPost = res;
       this.postDataArray = allPost.filter((item: { userId: any; }) => item.userId === this.id);
    });

  }
}
