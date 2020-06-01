import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  username:String;
  userObj:object;
  isImageLoaded:boolean =false;
  //constructor(private ls:LoginService,private hc:HttpClient,private activatedRoute:ActivatedRoute) { }
  constructor(private hc:HttpClient,private activatedRoute:ActivatedRoute) { } 

   ngOnInit() {
  //   this.username=this.ls.username;
  this.activatedRoute.paramMap.subscribe((result)=>{
    this.username=result.get("username");
  })

  this.hc.get<object>(`/user/userprofile/${this.username}`).subscribe((res:object)=>{
     this.userObj=res["data"];
     this.isImageLoaded = true;
   })
   
   }
  //test http call
  // sendTestReq() {
  //   this.hc.get('/user/test').subscribe((res)=>{
  //     alert(res["message"]);
  //   })
  // }

}
