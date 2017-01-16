import { FluxStore, Action } from 'flux-lite';
import { Injectable } from '@angular/core';
import { NewAccountPayload } from '../payloads/new-account';
import { LoginPayload } from '../payloads/login';
import { User } from '../model/user';
import { AuthTokenStore } from './auth-token.store';
import { DispatcherService } from '../services/dispatcher.service';
import { UserService } from '../services/user.service';

@Injectable()
export class AccountStore extends FluxStore<User, NewAccountPayload> {

  constructor(
      dispatcher: DispatcherService,
      private authTokenStore: AuthTokenStore,
      private userService: UserService) {
    super(dispatcher);
  }

  getInitialState(): User {
    return this.getFromAuthStore();
  }

  reduce(state: User, payload: NewAccountPayload, action: Action<LoginPayload>): User | Promise<User> {
    if (payload.type === NewAccountPayload.TYPE) {
      return this.userService
        .createAccount(payload.email, payload.name)
        .then(() => state);
    }
    if (payload.type === LoginPayload.TYPE) {
      return this.dispatcher
        .waitFor([ this.authTokenStore.dispatchToken ], action)
        .then(() => this.getFromAuthStore());
    }
    return state;
  }

  private getFromAuthStore(): User {
    let token = this.authTokenStore.state;
    if (token === null) {
      return null;
    }
    let tokenBody = token.split('.')[1];
    let tokenString = atob(tokenBody);
    let user = JSON.parse(tokenString);
    return user;
  }
}