import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExamListComponent } from "src/app/views/exam-list/exam-list.component";
import { ExamComponent } from "src/app/views/exam-list/exam/exam.component";
import { LessonListComponent } from "src/app/views/lesson-list/lesson-list.component";
import { LessonComponent } from "src/app/views/lesson-list/lesson/lesson.component";
import { LoginComponent } from "src/app/views/login/login.component";
import { RegisterComponent } from "src/app/views/register/register.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "lessons", component: LessonListComponent },
  { path: "lesson", component: LessonComponent },
  { path: "exams", component: ExamListComponent },
  {path: "exam", component: ExamComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}