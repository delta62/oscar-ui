import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { LoginPayload } from '../payloads/login';
import { DispatcherService } from '../services/dispatcher.service';
import { LocalStorageService } from '../services/localstorage.service';
import { AuthToken } from '../services/auth.service';

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
