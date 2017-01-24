import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { isType, LoginPayload } from '../payload';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/localstorage.service';
import { DispatcherService } from '../services/dispatcher.service';
import { AuthToken } from '../model';

@Injectable()
export class AuthTokenStore extends FluxStore<AuthToken, LoginPayload> {
  constructor(
      dispatcher: DispatcherService,
      private authService: AuthService,
      private localStorage: LocalStorageService) {
    super(dispatcher);
  }

  get isLoggedIn(): boolean {
    return !!this.state;
  }

  getInitialState(): AuthToken {
    return this.localStorage.getItem('authToken');
  }

  reduce(state: AuthToken, payload: LoginPayload): Promise<AuthToken> | AuthToken {
    if (isType(LoginPayload, payload)) {
      return this.authService.login(payload.email)
        .then(token => {
          this.localStorage.setItem('authToken', token);
          return token;
        });
    }
    return state;
  }
}
