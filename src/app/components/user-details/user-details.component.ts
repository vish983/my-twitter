import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() profileData: any;

  location = [
    {name: '', icon: 'map-marker'},
    { name: 'Born December 3, 1995', icon: 'eercast'},
    { name: 'Joined August 2012', icon: 'calendar'},
  ];

  constructor() { }

  ngOnInit(): void {
    if (this.profileData.address) {
      this.location[0].name = this.profileData.address.city;
    }
  }
}
