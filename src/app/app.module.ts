import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeService } from './employee.service';
import {TableModule} from 'primeng/table';
import { from } from 'rxjs';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
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
import { AuthorizationService } from './authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeedetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    AboutusComponent,
    ContactusComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    TechnologiesComponent,
    AngularComponent,
    JavascriptComponent,
    NodejsComponent,
    ExpressjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers:[{
		provide:HTTP_INTERCEPTORS,
		useClass:AuthorizationService,
		multi:true
	}],
  bootstrap: [AppComponent]
})
export class AppModule { }
