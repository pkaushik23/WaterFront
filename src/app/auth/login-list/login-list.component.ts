import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginService } from 'src/app/auth/services/login.service';
import { IdentityProvider } from 'src/app/models/auth.constants';


@Component({
  selector: 'login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.scss']
})
export class LoginListComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<LoginListComponent>, public loginSvc:LoginService ) {}

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close('no-op');
  }

  doFacebookLogin():void{
    this.loginSvc.login(IdentityProvider.Facebook);
    this.dialogRef.close();
  }

  doTwitterLogin():void{
    this.loginSvc.login(IdentityProvider.Twitter);
  }

  
}
