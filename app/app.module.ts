import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }  from './app-routing.module';
import { DispatcherService } from './dispatcher.service';

import {
  AppComponent,
  CategoriesComponent,
  LoginComponent,
  NewAccountComponent,
  HeaderComponent,
  CategoryPreviewComponent,
  CategoryComponent
} from './components';

import {
  AuthTokenStore,
  AccountStore,
  CategoryStore,
  ResponseStore,
  ScoreStore,
} from './stores';

import {
  LocalStorageService,
  AuthService,
  UserService,
  CategoryService,
  ResponseService
} from './services';

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
