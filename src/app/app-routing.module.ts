import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'user/register',component:RegisterComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'userdashboard/:username',component:UserdashboardComponent},
  {path:'technologies',component:TechnologiesComponent,children:[
    {path:'angular',component:AngularComponent},
    {path:'javascript',component:JavascriptComponent},
    {path:'nodejs',component:NodejsComponent},
    {path:'expressjs',component:ExpressjsComponent}
  ]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
