import { Component } from '@angular/core';

import {
  AccountStore,
  AuthTokenStore,
  CategoryStore,
  LoginStore,
  ResponseStore,
  ScoreStore
} from './shared/stores';

import { DispatcherService, SocketService } from './shared/services';
import { DidLoginPayload }   from './shared/payload';

@Component({
  selector: 'o-app',
  template: `
    <router-outlet (activate)="onActivate()"></router-outlet>
    <o-copyright></o-copyright>
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
    socketService: SocketService) {

      socketService.connect();
    }

  onActivate(): void {
    if (this.authTokenStore.isLoggedIn && !this.loginStore.state) {
      this.dispatcher.dispatch(new DidLoginPayload());
    }
  }
}
