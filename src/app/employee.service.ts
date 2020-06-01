import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    public currentEmpId:string;
    constructor(private http:HttpClient){}
    public getEmployeeList():Observable<any>{
        return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
    }
   public getEmployeeDetails(id:string):Observable<any>{
        return this.http.get("http://dummy.restapiexample.com/api/v1/employee"+id);
    }
}