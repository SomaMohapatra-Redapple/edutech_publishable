import { Component } from '@angular/core';
import { GetcategoriesService } from '../services/getcategories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  catResponse : any;

  constructor(private getcategory : GetcategoriesService){}
  getCategories(){
    this.getcategory.getcategories().subscribe((data) => {
      {
        this.catResponse = data;
      } 
      console.log(data);

    });
  }

}
