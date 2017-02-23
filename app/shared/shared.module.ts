import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';
import { CommonModule } from '@angular/common';

import {
  AuthService,
  CategoryService,
  DispatcherService,
  LocalStorageService,
  ResponseService,
  ScoreService,
  SocketService,
  UserService
} from './services';

import {
  AccountStore,
  AuthTokenStore,
  CategoryStore,
  LoginStore,
  ResponseStore,
  ScoreStore,
  SocketStore,
  UserStore
} from './stores';

import { HeaderComponent }    from './header.component';
import { TextInputComponent } from './textinput.component';
import { ButtonComponent }    from './button.component';
import { SubHeaderComponent } from './sub-header.component';

@NgModule({
  imports: [ HttpModule, CommonModule ],
  providers: [
    AuthService,
    CategoryService,
    DispatcherService,
    LocalStorageService,
    ResponseService,
    ScoreService,
    SocketService,
    UserService,

    AccountStore,
    AuthTokenStore,
    CategoryStore,
    LoginStore,
    ResponseStore,
    ScoreStore,
    SocketStore,
    UserStore
  ],
  declarations: [
    HeaderComponent,
    TextInputComponent,
    ButtonComponent,
    SubHeaderComponent
  ],
  exports: [
    HeaderComponent,
    TextInputComponent,
    ButtonComponent,
    SubHeaderComponent
  ]
})
export class SharedModule { }
