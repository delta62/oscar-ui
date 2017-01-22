import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { DispatcherService } from './dispatcher.service';

import {
  AuthService,
  CategoryService,
  LocalStorageService,
  ResponseService,
  UserService
} from './services';

import {
  AppComponent,
  CategoriesComponent,
  CategoryComponent,
  CategoryPreviewComponent,
  HeaderComponent,
  LoginComponent,
  NewAccountComponent
} from './components';

import {
  AccountStore,
  AuthTokenStore,
  CategoryStore,
  ResponseStore,
  ScoreStore
} from './stores';

import { AppRoutingModule }  from './app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent,
    NewAccountComponent,
    HeaderComponent,
    CategoryPreviewComponent,
    CategoryComponent
  ],
  providers: [
    DispatcherService,
    AuthTokenStore,
    AccountStore,
    AuthService,
    UserService,
    LocalStorageService,
    CategoryStore,
    CategoryService,
    ResponseService,
    ResponseStore,
    ScoreStore
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
