import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UsertypeComponent } from './usertype/usertype.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule} from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { InterviewComponent } from './interview/interview.component';
import { StudentLoginComponent } from './student-login/student-login.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    AdminloginComponent,
    UsertypeComponent,
    UserComponent,
    HeaderComponent,
    CategoriesComponent,
    InterviewComponent,
    StudentLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
