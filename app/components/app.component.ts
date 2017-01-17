import { Component, OnInit } from '@angular/core';
import { AuthTokenStore } from '../stores/auth-token.store';
import { AccountStore } from '../stores/account.store';
import { ResponseStore } from '../stores/response.store';
import { DispatcherService } from '../services/dispatcher.service';
import { AppInitPayload } from '../payloads/init';

@Component({
  selector: 'o-app',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(
      private dispatcher: DispatcherService,
      authTokenStore: AuthTokenStore,
      accountStore: AccountStore,
      responseStore: ResponseStore) { }

  ngOnInit(): void {
    this.dispatcher.dispatch({ type: AppInitPayload.name });
  }
}
