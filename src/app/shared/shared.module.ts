import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmButtonComponent } from './components/buttons/confirm-button/confirm-button.component';


@NgModule({
  declarations: [ConfirmButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [ConfirmButtonComponent, CommonModule]
})
export class SharedModule { }
