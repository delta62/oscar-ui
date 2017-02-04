import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { isType, LoginPayload, LogoutPayload } from '../payload';
import { AuthService, DispatcherService, LocalStorageService } from '../services';
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
    if (isType(LogoutPayload, payload)) {
      this.localStorage.removeItem('authToken');
      return null;
    }
    return state;
  }
}
