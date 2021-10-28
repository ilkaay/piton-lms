import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExamComponent } from './exam.component';

@NgModule({
  declarations: [ExamComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [ExamComponent],
  providers: []
})
export class ExamModule { }
