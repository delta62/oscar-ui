import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './components/app.component';
import { CategoriesComponent } from './components/categories.component';
import { LoginComponent } from './components/login.component';

import { DispatcherService } from './services/dispatcher.service';
import { LocalStorageService } from './services/localstorage.service';
import { AuthTokenStore } from './stores/auth-token.store';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    CategoriesComponent
  ],
  providers: [
    DispatcherService,
    AuthTokenStore,
    AuthService,
    LocalStorageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
