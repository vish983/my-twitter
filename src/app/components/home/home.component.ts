import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myArray: any = [];
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getAllPost().subscribe((res) => {
      this.myArray = res;
    });
  }

}
