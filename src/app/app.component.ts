import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
import { ApiService } from './services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-twitter';
  isAuthorisedUser = false;
  user: any;
  constructor(private router: Router, private apiService: ApiService, private local: LocalStorageService) {
    if (this.isAuthorisedUser) {

    } else {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {
    if (Object.keys(this.local.getDataFromLocal('authUser')).length > 0) {
      this.isAuthorisedUser = true;
      this.router.navigate(['/']);
    } else {
      if (Object.keys(this.local.getDataFromLocal('users')).length === 0) {
        this.apiService.allUser().subscribe(data => {
          this.user = data;
          this.local.setDataToLocal('users', data);
          this.isAuthorisedUser = false;
          this.router.navigate(['/login']);
        });
      }
    }
  }
}
