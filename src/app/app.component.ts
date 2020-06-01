import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ls: LoginService) { }
  title = 'MYFIRST-ANGULAR-app';
  n: number = 100;
  s: string = "hyderabad";
  emp: object = {
    empno: 100,
    name: "abcd"
  }
  marks: number[] = [10, 20, 30];
  status: boolean = true;
  imageUrl: string = "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg";
  d: string;
  sendData(data) {
    this.d = data;
    console.log(data);
  }
  changeStatus() {
    this.status = !this.status;
  }
  cityNames: string[] = [];
  AddCity(data) {
    this.cityNames.push(data);
  }
}
