import { Injectable } from '@angular/core';
import { LoginProviders, IdentityProvider } from 'src/app/models/auth.constants';
import {AuthorizedUser} from 'src/app/models/auth-user'
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AuthService) {
    this.setLoginSubscription();
   }
   _userInfo: AuthorizedUser;

  get userInfo(){
    return this._userInfo;
  }
  set userInfo(val){
    this._userInfo = val;
  }

   private setLoginSubscription(){
    this.authService.authState.subscribe((user) => {
      console.log(user,'setLoginSubscription');
      if(user){
        this.userInfo = new AuthorizedUser(user);
      }
    });
   }

  public isUserLoggedIn(){
    if(this.userInfo)
      return this.userInfo.isLoggedIn;
    else
      return false; 
  }

  public login(provider: IdentityProvider):void {
    switch (provider) {
      case LoginProviders.Facebook:
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
        break;
      default:
        alert('not implemented');
        break;
    }
  }

  public logout(){
    this.authService.signOut()
    .then((v)=>{
      this._userInfo = null;
    });
  }
}
