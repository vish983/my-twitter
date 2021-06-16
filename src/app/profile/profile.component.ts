import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  logUser: any;

  constructor( private localservice: LocalStorageService) {
    const foundUser = localservice.getDataFromLocal('users').find((item: any) => Number(item.id) === Number(window.location.pathname.split('/')[2]));
    if (foundUser) {
      this.logUser = foundUser;
    } else {
      Swal.fire('Unauthorised access', 'Please use valid credentials', 'error');
    }
  }

  ngOnInit(): void {
  }

}

