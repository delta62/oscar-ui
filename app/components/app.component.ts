import { Component } from '@angular/core';
import { AuthTokenStore } from '../services';

@Component({
  selector: 'o-app',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(authTokenStore: AuthTokenStore) { }
}
