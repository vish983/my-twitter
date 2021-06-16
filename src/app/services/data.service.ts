import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private localService: LocalStorageService) { }
  validateUser = (user: any) => {
    const allUsers: any[] = this.localService.getDataFromLocal('users');
    const foundUser = allUsers.find(item => item.username === user.username);
    if (foundUser) {
      this.localService.setDataToLocal('authUser', foundUser);
      return true;
    } else {
      return false;
    }
  }

}
