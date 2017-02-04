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
    UserService,

    AccountStore,
    AuthTokenStore,
    CategoryStore,
    LoginStore,
    ResponseStore,
    ScoreStore,
    SocketStore
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class SharedModule { }
