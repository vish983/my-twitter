import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  user: any;
  navigationArray = [
    {name: 'Home',  urlname: 'home', icon: 'home'},
    {name: 'Explore', urlname: 'explore', icon: 'hashtag'},
    {name: 'Notifications', urlname: 'notification', icon: 'bell-o'},
    {name: 'Message', urlname: 'message', icon: 'envelope-o'},
    {name: 'Bookmark', urlname: 'bookmark', icon: 'bookmark-o'},
    {name: 'List', urlname: 'list', icon: 'list-alt'},

  ];

  constructor( private localstorage: LocalStorageService) {
    this.user = this.localstorage.getDataFromLocal('authUser');
   }

  ngOnInit(): void {

  }

}
