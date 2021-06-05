import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-twitter';
  isAuthorisedUser = false;
  constructor(private router: Router) {
    if (this.isAuthorisedUser) {

    } else {
      this.router.navigate(['/login']);
    }
  }
}
