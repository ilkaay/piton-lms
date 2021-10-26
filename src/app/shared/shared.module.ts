import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmButtonComponent } from './components/buttons/confirm-button/confirm-button.component';
import { EmailInputComponent } from './components/inputs/email-input/email-input.component';
import { PasswordInputComponent } from './components/inputs/password-input/password-input.component';


@NgModule({
  declarations: [
    ConfirmButtonComponent,
    EmailInputComponent,
    PasswordInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConfirmButtonComponent, 
    EmailInputComponent, 
    PasswordInputComponent,
    CommonModule
  ]
})
export class SharedModule { }
