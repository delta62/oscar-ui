import { NgModule }   from '@angular/core';
import { HttpModule } from '@angular/http';

import {
  AuthService,
  CategoryService,
  DispatcherService,
  LocalStorageService,
  ResponseService,
  ScoreService,
  SocketService,
  SocketDispatcherService,
  UserService
} from './services';

import {
  AccountStore,
  AuthTokenStore,
  CategoryStore,
  LoginStore,
  ResponseStore,
  ScoreStore
} from './stores';

@NgModule({
  imports: [ HttpModule ],
  providers: [
    AuthService,
    CategoryService,
    DispatcherService,
    LocalStorageService,
    ResponseService,
    ScoreService,
    SocketService,
    SocketDispatcherService,
    UserService,

    AccountStore,
    AuthTokenStore,
    CategoryStore,
    LoginStore,
    ResponseStore,
    ScoreStore
  ]
})
export class SharedModule { }
