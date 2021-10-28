import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmButtonComponent } from './components/buttons/confirm-button/confirm-button.component';
import { EmailInputComponent } from './components/inputs/email-input/email-input.component';
import { PasswordInputComponent } from './components/inputs/password-input/password-input.component';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TeacherComponent } from './components/teacher/teacher.component';


@NgModule({
  declarations: [
    ConfirmButtonComponent,
    EmailInputComponent,
    PasswordInputComponent,
    TextInputComponent,
    NavbarComponent,
    TeacherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConfirmButtonComponent, 
    EmailInputComponent, 
    PasswordInputComponent,
    TextInputComponent,
    NavbarComponent,
    CommonModule,
    TeacherComponent
  ]
})
export class SharedModule { }
