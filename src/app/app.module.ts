import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmailInputComponent } from './shared/components/email-input/email-input.component';
import { PasswordInputComponent } from './shared/components/password-input/password-input.component';
import { ConfirmButtonComponent } from './shared/components/buttons/confirm-button/confirm-button.component';
import { DeleteButtonComponent } from './shared/components/buttons/delete-button/delete-button.component';
import { UpdateButtonComponent } from './shared/components/buttons/update-button/update-button.component';
import { IndexComponent } from './views/login/components/index/index.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { FormComponent } from './views/components/form/form.component';
import { ViewComponent } from './views/login/view/view.component';
import { CardComponent } from './views/login/components/card/card.component';
import { TestComponent } from './views/login/components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailInputComponent,
    PasswordInputComponent,
    ConfirmButtonComponent,
    DeleteButtonComponent,
    UpdateButtonComponent,
    IndexComponent,
    LoginViewComponent,
    FormComponent,
    ViewComponent,
    CardComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
