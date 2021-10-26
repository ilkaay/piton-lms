import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './core/routes/routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './views/login/login.module';
import { SignupComponent } from './views/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
