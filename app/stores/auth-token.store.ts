import { Injectable } from '@angular/core';
import { Dispatcher, FluxStore, Action } from 'flux-lite';
import { LocalStorageService, AuthToken } from '../services';

@Injectable()
export class AuthTokenStore extends FluxStore<AuthToken, any> {
  constructor(
      dispatcher: Dispatcher<any>,
      private localStorage: LocalStorageService) {
    super(dispatcher);
  }

  getInitialState(): AuthToken {
    return this.localStorage.getItem('authToken');
  }

  reduce(state: AuthToken, action: Action<AuthToken>): AuthToken {
    return state;
  }
}
