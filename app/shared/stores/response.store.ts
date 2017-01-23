import { FluxStore, Action } from 'flux-lite';
import { Injectable } from '@angular/core';
import { Response } from '../model/response';
import { isType, IPayload, DidLoginPayload, SaveResponsePayload } from '../payload';
import { DispatcherService } from '../services/dispatcher.service';
import { ResponseService } from '../services/response.service';
import { AuthTokenStore } from './auth-token.store';

@Injectable()
export class ResponseStore extends FluxStore<Array<Response>, SaveResponsePayload> {

  constructor(
      dispatcher: DispatcherService,
      private responseService: ResponseService,
      private authTokenStore: AuthTokenStore) {
    super(dispatcher);
  }

  getInitialState(): Array<Response> {
    return [ ];
  }

  reduce(state: Array<Response>, payload: SaveResponsePayload, action: Action<IPayload>): Array<Response> | Promise<Array<Response>> {
    if (isType(SaveResponsePayload, payload)) {
      let authToken = this.authTokenStore.state;
      return this.responseService
        .saveResponse(authToken, payload.categoryId, payload.value)
        .then(() => this.mergeChanges(state, payload));
    }
    if (isType(DidLoginPayload, payload)) {
      return this.dispatcher.waitFor([ this.authTokenStore.dispatchToken ], action)
        .then(() => this.authTokenStore.state)
        .then(token => this.responseService.getResponses(token));
    }
    return state;
  }

  getCategoryResponse(categoryId: string): Response {
    return this.state.find(res => res.category === categoryId);
  }

  private mergeChanges(state: Array<Response>, payload: SaveResponsePayload): Array<Response> {
    let newState: Array<Response> = [ ];
    state.forEach(res => {
      if (res.category !== payload.categoryId) {
        newState.push(res);
      }
    });
    newState.push({ category: payload.categoryId, value: payload.value });

    return newState;
  }
}
