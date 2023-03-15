import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {

//   baseURL: string = "http://localhost:3000/";
 
//   constructor(private http: HttpClient) {
//   }
//  studentLogin = new FormGroup({
//   name : new FormControl(''), 
//   email : new FormControl(''),
//   image : new FormControl('')
//  })
   

  
  value:any;

  getUserValue(val:any){
    this.value=val;
    console.log(val);

  }

}
