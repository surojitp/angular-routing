import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated():boolean{
    //this return true or false
    const userData = sessionStorage.getItem('userData');
    
    
    if(userData && userData.length > 0){
      return true;
    }
    else{
      return false;
    }
    
  }

  public async getUserData(){
    const userData = await sessionStorage.getItem('userData');
    return JSON.parse(userData);
  }

  public async login(postData){
    //login api connection
    const responceData ={
      'name':'Surojit',
      'id': '007',
      'token': 'abc123'
    }

    await sessionStorage.setItem('userData',JSON.stringify(responceData));
    return true;
  }

  public signup(postData){
    //signup api connection
  }

  public async logout(){
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }
}
