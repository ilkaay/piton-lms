import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LessonComponent } from './lesson.component';

@NgModule({
  declarations: [LessonComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [LessonComponent],
  providers: []
})
export class LessonModule { }
