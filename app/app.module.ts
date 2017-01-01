import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './components/app.component';
import { CategoriesComponent } from './components/categories.component';
import { LoginComponent } from './components/login.component';

import { DispatcherService } from './services/dispatcher.service';
import { LocalStorageService } from './services/localstorage.service';
import { AuthTokenStore } from './stores/auth-token.store';

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
