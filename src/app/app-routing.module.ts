import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppComponent } from './app.component';
import { ToolsComponent } from './components/tools/tools.component';
import { HomeComponent } from './components/home/home.component';

const routes:Routes = [
  
  //this does not work.
  //{ path: '/', redirectTo:'home', pathMatch: 'full'},

  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  
  //else
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'tools', component: ToolsComponent},
  
  //does notwork
  //{ path: '**', redirectTo: ''}, 
  //works, but still shows the incorrect route which user has typed in the address bar of the user.
  //IMP : this needs to be last item. in the path collection
  //{ path: '**', component: HomeComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
