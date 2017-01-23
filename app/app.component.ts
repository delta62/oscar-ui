import { Component } from '@angular/core';

import { LoginStore }     from './shared/stores/login.store';
import { AccountStore }   from './shared/stores/account.store';
import { AuthTokenStore } from './shared/stores/auth-token.store';
import { CategoryStore }  from './shared/stores/category.store';
import { ResponseStore }  from './shared/stores/response.store';
import { DispatcherService } from './shared/services/dispatcher.service';
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
    resopnseStore: ResponseStore) { }

  onActivate(): void {
    if (this.authTokenStore.isLoggedIn && !this.loginStore.state) {
      this.dispatcher.dispatch(new DidLoginPayload());
    }
  }
}
