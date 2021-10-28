import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExamListComponent } from './exam-list.component';
import { ExamModule } from './exam/exam.module';

@NgModule({
  declarations: [ExamListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExamModule
  ],
  exports: [ExamListComponent],
  providers: []
})
export class ExamListModule { }
