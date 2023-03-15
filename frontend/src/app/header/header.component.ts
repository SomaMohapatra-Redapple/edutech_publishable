import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router : Router){}

  goToUser(){
    this.router.navigateByUrl('user')
  }

  goToAdmin()
  {
    this.router.navigateByUrl('admin')
  }

  goToHome(){
    this.router.navigateByUrl('/')
  }

  goToCategories(){
    this.router.navigateByUrl('/categories');
  }


}
