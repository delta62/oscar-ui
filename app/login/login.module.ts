import { NgModule }    from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent }      from './login.component';
import { NewAccountComponent } from './new-account.component';

@NgModule({
  imports: [
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    NewAccountComponent
  ]
})
export class LoginModule { }
