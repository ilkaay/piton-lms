import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "src/app/views/login/login.component";
import { SignupComponent } from "src/app/views/signup/signup.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}