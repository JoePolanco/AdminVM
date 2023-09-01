import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
   ReactiveFormsModule,
   BrowserModule,
   FormsModule
  ],

  exports: [
    CommonModule,
   ReactiveFormsModule,
   BrowserModule,
   FormsModule
  ]

})
export class AuthModule { }
