import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rs: RegisterService, private route: Router) { }

  ngOnInit() {
  }
  file: File
  imgUrl: string | ArrayBuffer ="https://bulma.io/images/placeholders/480x480.png";

  getImageFile(imageFile: File) {
    console.log("image data is ", imageFile);
    this.file = imageFile;

    //create fileReaferObj to read file content
    let reader = new FileReader();

    //read data of file(image)
    reader.readAsDataURL(this.file);

    //when onload is fired i.e file content is read successfully
    reader.onload = () => {
      this.imgUrl = reader.result;
      // console.log("image data", this.imgUrl);
    }
  }

  submitForm(formObj: NgForm) {

    //create obj of type formdata
    let formData = new FormData();

    //get user object from NgForm object
    let userObj = formObj.value;

    //append image to it
    
    formData.append("photo", this.file);

    //append user object by converting it into string
    formData.append("userObj", JSON.stringify(userObj));

    //pass "formData" object to register service to make HTTP POST request 
    this.rs.doRegister(formData).subscribe((res) => {
      if (res["message"] == "username already existed") {
        alert("username already existed");
      }
      if (res["message"] == "register successful") {
        alert("registered successfully");
        this.route.navigate(["./login"]);
      }
    })
  }

}
