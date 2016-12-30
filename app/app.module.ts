import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {
  AppComponent,
  CategoriesComponent,
  LoginComponent
}  from './components';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
