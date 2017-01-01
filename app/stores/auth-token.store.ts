import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { LoginPayload } from '../payloads';
import { DispatcherService, LocalStorageService, AuthToken } from '../services';

@Injectable()
export class AuthTokenStore extends FluxStore<AuthToken, LoginPayload> {
  constructor(
      dispatcher: DispatcherService,
      private localStorage: LocalStorageService) {
    super(dispatcher);
  }

  getInitialState(): AuthToken {
    return this.localStorage.getItem('authToken');
  }

  reduce(state: AuthToken, payload: LoginPayload): AuthToken {
    console.log('time to reduce');
    if (payload.type === LoginPayload.TYPE) {
      console.log('Time to log in');
    }
    return state;
  }
}
