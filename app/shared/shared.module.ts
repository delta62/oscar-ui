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
  SocketStore
} from './stores';

import { HeaderComponent } from './header.component';
import { TextInputComponent } from './textinput.component';

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
    SocketStore
  ],
  declarations: [ HeaderComponent, TextInputComponent ],
  exports: [ HeaderComponent, TextInputComponent ]
})
export class SharedModule { }
