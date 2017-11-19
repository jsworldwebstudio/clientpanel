import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable()
export class SettingsService {
  settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: false,
    disableBalanceOnEdit: true
}

  constructor() {
    if(localStorage.getItem('settings') != null){
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  //Retrieve settings from local storage
  getSettings(){
    return this.settings;
  }
  
  //Cahnge settings in local storage
  changeSettings(settings: Settings){
    localStorage.setItem('settings', JSON.stringify(settings));
  }

}
