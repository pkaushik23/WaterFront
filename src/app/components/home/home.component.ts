import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginListComponent } from 'src/app/auth/login-list/login-list.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loginSvc:LoginService,private dialog: MatDialog) { }

  ngOnInit() {
  }

  public initLogin(){
    //this.loginSvc.login();
    let dialogRef = this.dialog.open(LoginListComponent);
  }

  public logout(){
    this.loginSvc.logout();
  }
}
