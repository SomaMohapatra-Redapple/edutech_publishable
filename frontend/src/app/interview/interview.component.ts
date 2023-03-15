import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetcategoriesService } from '../services/getcategories.service';
@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent {

  interview:any;

  constructor(private router : Router,private interviewData:GetcategoriesService){}

  getInterviewData(){
    this.interviewData.getcategories().subscribe((data) => {
      {
        this.interview = data;
      } 
      console.log(data);
  
    })

  }

  

  goToInterview(){
    this.router.navigateByUrl('interview')
  }

}
