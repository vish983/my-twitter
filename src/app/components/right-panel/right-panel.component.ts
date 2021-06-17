import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
  topicToFollow = [
    {name: 'Linux', dept: 'Operating system' },
    {name: 'Database', dept: 'Technology' },
    {name: 'Ux design', dept: 'Computer programming' },
    {name: 'Python', dept: 'Computer programming' },
    {name: 'Cloud computing', dept: 'Technology' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
