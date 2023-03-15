import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CategoriesComponent } from './categories/categories.component';
import { InterviewComponent } from './interview/interview.component';
import { UserComponent } from './user/user.component';
import { UsertypeComponent } from './usertype/usertype.component';

const routes: Routes = [
  {path : '',component : UsertypeComponent},
  { path: 'admin', component: AdminloginComponent },
  { path: 'user', component: UserComponent},
  { path: 'categories', component: CategoriesComponent},
  { path:'interview',component:InterviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
