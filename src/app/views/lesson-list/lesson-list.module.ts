import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LessonModule } from './lesson/lesson.module';
import { LessonListComponent } from './lesson-list.component';

@NgModule({
  declarations: [LessonListComponent],
  imports: [
    CommonModule,
    SharedModule,
    LessonModule
  ],
  exports: [LessonListComponent],
  providers: []
})
export class LessonListModule { }
