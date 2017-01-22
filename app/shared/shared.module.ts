import { NgModule }   from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthService }         from './services/auth.service';
import { CategoryService }     from './services/category.service';
import { DispatcherService }   from './services/dispatcher.service';
import { LocalStorageService } from './services/localstorage.service';
import { ResponseService }     from './services/response.service';
import { UserService }         from './services/user.service';

import { AccountStore }   from './stores/account.store';
import { AuthTokenStore } from './stores/auth-token.store';
import { CategoryStore }  from './stores/category.store';
import { ResponseStore }  from './stores/response.store';
import { ScoreStore }     from './stores/score.store';

@NgModule({
  imports: [ HttpModule ],
  providers: [
    AuthService,
    CategoryService,
    DispatcherService,
    LocalStorageService,
    ResponseService,
    UserService,

    AccountStore,
    AuthTokenStore,
    CategoryStore,
    ResponseStore,
    ScoreStore
  ]
})
export class SharedModule { }
