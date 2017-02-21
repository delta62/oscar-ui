import { FluxStore, Action } from 'flux-lite';
import { Injectable } from '@angular/core';
import { isType, IPayload, NewAccountPayload, DidLoginPayload } from '../payload';
import { User } from '../model';
import { AuthTokenStore } from './auth-token.store';
import { DispatcherService, UserService } from '../services';

@Injectable()
export class AccountStore extends FluxStore<User, NewAccountPayload> {
  constructor(
      dispatcher: DispatcherService,
      private authTokenStore: AuthTokenStore,
      private userService: UserService) {
    super(dispatcher);
  }

  protected getInitialState(): User {
    return User.makeDefault();
  }

  protected reduce(state: User, payload: NewAccountPayload, action: Action<IPayload>): User | Promise<User> {
    if (isType(NewAccountPayload, payload)) {
      return this.userService
        .createAccount(payload.email, payload.name)
        .then(() => state);
    }
    if (isType(DidLoginPayload, payload)) {
      return this.dispatcher
        .waitFor([ this.authTokenStore.dispatchToken ], action)
        .then(() => this.getCurrentUser());
    }
    return state;
  }

  private getCurrentUser(): User {
    let authToken = this.authTokenStore.state;
    let authUser = this.getFromAuthStore();
    return authUser;
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
