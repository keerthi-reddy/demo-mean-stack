import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { RouteGuard } from '../route.guard';


const routes: Routes = [{path:'userdashboard/:username',
                        component:UserdashboardComponent,
                        canActivate:[RouteGuard]}]
// children:[{path:'userprofile',component:UserprofileComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
