import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './core/routes/routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './views/login/login.module';
import { RegisterModule } from './views/register/register.module';
import { AngularFireModule} from "@angular/fire/compat";
import { AngularFireAnalyticsModule } from "@angular/fire/compat/analytics";
import { LessonsModule } from './views/lessons/lessons.module';

const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDcLoojld2ivAjb0G9IIn0OprPA10UseXI",
    authDomain: "piton-lms.firebaseapp.com",
    databaseURL: "https://piton-lms-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "piton-lms",
    storageBucket: "piton-lms.appspot.com",
    messagingSenderId: "37406587111",
    appId: "1:37406587111:web:fbbc4d7f3acf1bf3a50a42",
    measurementId: "G-K67L7T8YGF"
  }
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    SharedModule,
    LessonsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
