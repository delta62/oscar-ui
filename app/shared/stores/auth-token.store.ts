import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { isType, LoginPayload, LogoutPayload, PinPayload, IPayload } from '../payload';
import { AuthService, DispatcherService, LocalStorageService } from '../services';
import { AuthToken } from '../model';

@Injectable()
export class AuthTokenStore extends FluxStore<AuthToken, IPayload> {
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

  reduce(state: AuthToken, payload: IPayload): Promise<AuthToken> | AuthToken {
    if (isType(PinPayload, payload)) {
      let pl = <PinPayload>payload;
      return this.authService.loginWithPin(pl.email, pl.pin)
        .then(token => {
          this.localStorage.setItem('authToken', token);
          return token;
        });
    }
    if (isType(LoginPayload, payload)) {
      let pl = <LoginPayload>payload;
      this.authService.login(pl.email)
      return state;
    }
    if (isType(LogoutPayload, payload)) {
      this.localStorage.removeItem('authToken');
      return null;
    }
    return state;
  }
}
