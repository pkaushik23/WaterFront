import { Injectable } from '@angular/core';
import { LoginProviders, IdentityProvider } from 'src/app/models/auth.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  _userInfo: {idp:IdentityProvider,isLoggedIn:boolean, name:string};

  get userInfo(){
    return this._userInfo;
  }

  set userInfo(val){
    this._userInfo = val;
  }

  public isUserLoggedIn(){
    if(this.userInfo)
      return this.userInfo.isLoggedIn
    else
      return false; 
  }

  public login(provider: IdentityProvider):void {
    switch (provider) {
      case LoginProviders.Facebook:
        console.log(provider);
        this.userInfo = {isLoggedIn : true, idp : provider, name:'Dumms'};
        break;
      default:
        alert('not implemented');
        break;
    }
  }

  public logout(): boolean{
    let result = false;
    if(this.userInfo){
      this.userInfo = null;
      result = true;
    }
    return result;

  }
}
