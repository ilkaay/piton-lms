import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExamsComponent } from "src/app/views/exams/exams.component";
import { LessonsComponent } from "src/app/views/lessons/lessons.component";
import { LoginComponent } from "src/app/views/login/login.component";
import { RegisterComponent } from "src/app/views/register/register.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "lessons", component: LessonsComponent},
  { path: "exams", component: ExamsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}