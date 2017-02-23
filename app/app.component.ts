import { Component, DoCheck } from '@angular/core';

import { User } from './shared/model';

import {
  AccountStore,
  AuthTokenStore,
  CategoryStore,
  LoginStore,
  MenuVisibilityStore,
  ResponseStore,
  ScoreStore,
  SocketStore,
  UserStore
} from './shared/stores';

import { DispatcherService } from './shared/services';
import { DidLoginPayload }   from './shared/payload';

@Component({
  moduleId: module.id,
  selector: 'o-app',
  styleUrls: [ './app.css' ],
  template: `
    <o-menu [user]="user" [ngClass]="{ visible: showMenu }"></o-menu>
    <div class='body'>
      <router-outlet (activate)="onActivate()"></router-outlet>
    </div>
    <div class='footer'>
      <o-copyright></o-copyright>
    </div>
  `,
})
export class AppComponent implements DoCheck {
  user: User;

  constructor(
    private dispatcher: DispatcherService,
    private authTokenStore: AuthTokenStore,
    private loginStore: LoginStore,
    private accountStore: AccountStore,
    private menuVisibilityStore: MenuVisibilityStore,
    categoryStore: CategoryStore,
    resoponseStore: ResponseStore,
    scoreStore: ScoreStore,
    socketStore: SocketStore,
    userStore: UserStore) { }

  ngDoCheck() {
    this.user = this.accountStore.state;
  }

  get showMenu(): boolean {
    return this.menuVisibilityStore.state;
  }

  onActivate(): void {
    if (this.authTokenStore.isLoggedIn && !this.loginStore.state) {
      this.dispatcher.dispatch(new DidLoginPayload());
    }
  }
}
