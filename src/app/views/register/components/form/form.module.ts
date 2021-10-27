import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form.component';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CommonModule
  ],
  exports: [
    FormComponent
  ],
  providers: [],
})
export class RegisterFormModule { }
