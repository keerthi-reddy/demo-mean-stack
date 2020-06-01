import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private ls: LoginService) { }

  ngOnInit() {
    setTimeout(() => {
      this.ls.userLoginStatus = false;
      this.ls.doLogout();
    })

  }
  submitForm(dataObj) {

    let loginFormObj = dataObj.value;
    if (dataObj.role == "admin") {

    }
    if (dataObj.role == "user") {
      this.ls.doLogin(dataObj).subscribe((result) => {
        if (result["message"] == "invalid username") {
          alert("invalid user name");
          dataObj.reset()
        }
        if (result["message"] == "invalid password") {
          alert("Invalid password");
          //dataObj.reset();
        }
        if(result["message"]=="success") {
          //alert("login sucess");
          localStorage.setItem("signedToken", result["token"]);
          this.ls.userLoginStatus = true;
          this.ls.username = result["username"];
          //redirect to userdashboard component
          //this.router.navigate(['/userdashboard']);
          this.router.navigate(['/userdashboard',result["username"]]);
        }
      });
    }
    // console.log(dataObj);
    //if(dataObj.username=="admin"&&dataObj.password=="admin")
    //{
    //navigate to admindashboard component
    //this.router.navigate(['admindashboard']);
    //}
    //else
    //{
    //navigate to userdashboard component
    //this.router.navigate(['userdashboard']);
    //} 
  }
}
