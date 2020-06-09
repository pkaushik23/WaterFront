import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginService } from 'src/app/auth/services/login.service';
import { IdentityProvider } from 'src/app/models/auth.constants';
import { Router } from '@angular/router';
import { ApplicationPaths } from 'src/app/models/app.constants';


@Component({
  selector: 'login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.scss']
})
export class LoginListComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<LoginListComponent>, public loginSvc:LoginService, private route:Router ) {}

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close('no-op');
  }

  doFacebookLogin():void{
    this.loginSvc.login(IdentityProvider.Facebook);
    this.dialogRef.close();
    //this.route.navigate([ApplicationPaths.Dashboard]);
  }

  doTwitterLogin():void{
    this.loginSvc.login(IdentityProvider.Twitter);
  }

  
}
