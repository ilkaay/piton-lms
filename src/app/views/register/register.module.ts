import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register.component';
import { RegisterFormModule } from './components/form/form.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegisterFormModule
  ],
  exports: [
    RegisterComponent
  ],
  providers: []
})
export class RegisterModule { }
