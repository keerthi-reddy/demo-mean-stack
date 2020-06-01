import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  employee:any;
  showEmployee: boolean =false;
  constructor(private employeeservice :EmployeeService) { }

  ngOnInit() {
    var empID=this.employeeservice.currentEmpId;
    this.employeeservice.getEmployeeDetails(empID)
    .subscribe(resp=>{
      this.employee=resp;
      this.showEmployee=true;
    });
  }

}