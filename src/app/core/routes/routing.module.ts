import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "src/app/views/login/login.component";
import { RegisterComponent } from "src/app/views/register/register.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}