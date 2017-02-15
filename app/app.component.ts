import { Component } from '@angular/core';

import {
  AccountStore,
  AuthTokenStore,
  CategoryStore,
  LoginStore,
  ResponseStore,
  ScoreStore,
  SocketStore
} from './shared/stores';

import { DispatcherService } from './shared/services';
import { DidLoginPayload }   from './shared/payload';

@Component({
  moduleId: module.id,
  selector: 'o-app',
  styleUrls: [ './app.css' ],
  template: `
    <div class='body'>
      <router-outlet (activate)="onActivate()"></router-outlet>
    </div>
    <div class='footer'>
      <o-copyright></o-copyright>
    </div>
  `,
})
export class AppComponent {
  constructor(
    private dispatcher: DispatcherService,
    private authTokenStore: AuthTokenStore,
    private loginStore: LoginStore,
    accountStore: AccountStore,
    categoryStore: CategoryStore,
    resoponseStore: ResponseStore,
    scoreStore: ScoreStore,
    socketStore: SocketStore) { }

  onActivate(): void {
    if (this.authTokenStore.isLoggedIn && !this.loginStore.state) {
      this.dispatcher.dispatch(new DidLoginPayload());
    }
  }
}
