import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }        from './components/app.component';
import { CategoriesComponent } from './components/categories.component';
import { LoginComponent }      from './components/login.component';
import { NewAccountComponent } from './components/new-account.component';
import { HeaderComponent }     from './components/header.component';
import { CategoryPreviewComponent } from './components/category-preview.component';
import { CategoryComponent } from './components/category.component';

import { DispatcherService }   from './services/dispatcher.service';
import { LocalStorageService } from './services/localstorage.service';
import { AuthTokenStore }      from './stores/auth-token.store';
import { AccountStore }        from './stores/account.store';
import { AuthService }         from './services/auth.service';
import { UserService }         from './services/user.service';
import { CategoryStore }       from './stores/category.store';
import { CategoryService }     from './services/category.service';
import { ResponseService }     from './services/response.service';
import { ResponseStore }       from './stores/response.store';

import { AppRoutingModule } from './app-routing.module';

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
    ResponseStore
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
