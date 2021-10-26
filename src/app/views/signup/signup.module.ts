import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmButtonComponent } from 'src/app/shared/components/buttons/confirm-button/confirm-button.component';
import { SignupComponent } from './signup.component';



@NgModule({
  declarations: [ConfirmButtonComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SignupComponent]
})
export class SignupModule { }
