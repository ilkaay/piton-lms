import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './core/routes/routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './views/login/login.module';
import { RegisterModule } from './views/register/register.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
