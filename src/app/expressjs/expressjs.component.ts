import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-expressjs',
  templateUrl: './expressjs.component.html',
  styleUrls: ['./expressjs.component.css']
})
export class ExpressjsComponent implements OnInit {
  data:any;
  //inject dataservice object
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.data=this.ds.sendDataToComponent();
  }


}
