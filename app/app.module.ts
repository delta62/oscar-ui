import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {
  AppComponent,
  CategoriesComponent,
  LoginComponent
} from './components';

import {
  DispatcherService,
  LocalStorageService,
  AuthTokenStore
} from './services';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent
  ],
  providers: [
    DispatcherService,
    AuthTokenStore,
    LocalStorageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
