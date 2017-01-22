import { Component, OnInit } from '@angular/core';
import { AuthTokenStore, AccountStore, ResponseStore } from '../stores';

@Component({
  selector: 'o-app',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(
      authTokenStore: AuthTokenStore,
      accountStore: AccountStore,
      responseStore: ResponseStore) { }
}
