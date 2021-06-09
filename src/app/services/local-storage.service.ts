import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setDataToLocal = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getDataFromLocal = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
}

