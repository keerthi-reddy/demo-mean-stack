import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employeeList:any[];
  title:string="My first component";
  constructor(private employeeservice:EmployeeService,private router:Router,private route:ActivationStart) { }
  ngOnInit() {

    this.employeeservice.getEmployeeList()
    .subscribe(resp =>{
      this.employeeList=resp;
      console.log("Employee list",this.employeeList);
    });
  }
getDetails(empId:string){
  this.employeeservice.currentEmpId=empId;
  this.router.navigate(['/details']);
}
}
