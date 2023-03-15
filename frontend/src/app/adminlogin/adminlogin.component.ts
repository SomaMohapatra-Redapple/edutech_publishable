import { Component } from '@angular/core';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  email: string ="";
  password : string ="";


  login(){
    let bodyData = 
    {
      "email" : this.email,
      "password" : this.password

    }

    console.log(bodyData);
  }

  getUserValue(value:any){

    console.log(value);

  }

  

}
