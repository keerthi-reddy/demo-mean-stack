import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//to make http request
//-->inject HttpClient object from root injector
constructor(private hc:HttpClient){}
//-->make http req on that object
  getData():Observable<object[]>  //data is present in observable
  {
   return  this.hc.get<object[]>('https://jsonplaceholder.typicode.com/posts');
  }
  //make another http get req
  getUserData():Observable<object>
  {
    return  this.hc.get('https://reqres.in/api/users');
  }
  //data
  javascriptData:string[]=["dynamic datatype","for-of loop","prototypic"];
  angularData:string[]=["modules","components","services","directives"];
  nodeJS:string[]=["nodes","components","parents"];
  expressJS:string[]=["expressions","JS"];
  //to take data
  dataOfService:any;
  readDataFromComponent(data:any)
  {
   this.dataOfService=data;
  }
  sendDataToComponent()
  {
  return this.dataOfService;
  }
}
