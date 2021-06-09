import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  navigationArray = [
    {name: 'Home',  urlname: 'home', icon: 'home'},
    {name: 'Explore', urlname: 'explore', icon: 'hashtag'},
    {name: 'Notificatio', urlname: 'notification', icon: 'bell-o'},
    {name: 'Message', urlname: 'message', icon: 'envelop-o'},
    {name: 'Bookmark', urlname: 'bookmarks', icon: 'bookmark-o'},
    {name: 'List', urlname: 'list', icon: 'list-alt'},
    {name: 'Profile', urlname: 'profile', icon: 'user-o'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
