import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SigninComponent,
    SignupComponent
  ],
  exports:[
    SigninComponent,
    SignupComponent
  ]
})
export class UserauthModule { }
