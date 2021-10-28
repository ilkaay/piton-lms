import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LessonsComponent } from './lessons.component';

@NgModule({
  declarations: [LessonsComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [LessonsComponent],
  providers: []
})
export class LessonsModule { }
