import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginPage = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private local: LocalStorageService, private dataService: DataService, private router: Router) {
    if (Object.keys(this.local.getDataFromLocal('authUser')).length > 0) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

  onSubmitHandler = () => {
    const user = {
      username: this.loginPage.controls.username.value,
      pass: this.loginPage.controls.password.value,
    };
    const flag = this.dataService.validateUser(user);
    if (flag) {
      this.router.navigate(['/']);
    } else {
      alert('wrong cred');
    }
  }

}
