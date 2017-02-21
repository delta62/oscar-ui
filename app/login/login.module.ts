import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent }      from './login.component';
import { NewAccountComponent } from './new-account.component';
import { SharedModule }        from '../shared/shared.module';

@NgModule({
  imports: [
    LoginRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    NewAccountComponent
  ]
})
export class LoginModule { }
