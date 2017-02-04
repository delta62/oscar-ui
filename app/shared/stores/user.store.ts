import { Injectable } from '@angular/core';
import { FluxStore, Action } from 'flux-lite';
import { AuthTokenStore } from './auth-token.store';
import { DispatcherService, UserService } from '../services';
import { TypeOrPromise, User, Identifier } from '../model';
import { IPayload, DidLoginPayload, isType } from '../payload';

@Injectable()
export class UserStore extends FluxStore<Array<User>, IPayload> {

  constructor(
    dispatcher: DispatcherService,
    private userService: UserService,
    private authTokenStore: AuthTokenStore) {
    super(dispatcher);
  }

  protected getInitialState(): Array<User> {
    return [ ];
  }

  getById(userId: Identifier): User {
    return this.state.find(user => user._id === userId);
  }

  protected reduce(state: Array<User>, payload: IPayload, action: Action<IPayload>): TypeOrPromise<Array<User>> {
    if (isType(DidLoginPayload, payload)) {
      return this.dispatcher.waitFor([ this.authTokenStore.dispatchToken ], action)
        .then(() => this.authTokenStore.state)
        .then(token => this.userService.getUsers(token));
    }
    return state;
  }
}
