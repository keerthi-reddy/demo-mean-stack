import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  //inject dataservice object
  dataarray:object[]=[]
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.ds.getData().subscribe((data)=>{
      this.dataarray=data;
    })
  }

}
