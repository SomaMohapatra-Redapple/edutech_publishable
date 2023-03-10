import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetcategoriesService {

  constructor(private http : HttpClient) { }

 public getcategories(): Observable<any>{
    const url = "http://localhost:3000/showcategories/"

    return this.http.get <any>(url)
  }

}
