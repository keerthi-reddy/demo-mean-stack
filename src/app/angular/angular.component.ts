import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
 // data1:string[]=[];
  dataobject:object[]=[];
  //inject dataservice object
  constructor(private ds:DataService) { }

  ngOnInit() {
    //subscribe to the observable
    this.ds.getUserData().subscribe((data)=>{
      this.dataobject=data["data"];
      console.log(this.dataobject);
    })
   // this.data1=this.ds.angularData;

  }

}
