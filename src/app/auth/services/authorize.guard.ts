import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { ToastNotificationService } from 'src/app/common/toast-notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private loginSvc:LoginService, private notifySvc:ToastNotificationService) {
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginSvc.isUserLoggedIn()){
      return true;
    } else {
      this.notifySvc.showError('Please sign-in to access this resource');
      return false;
    }
  }
}
