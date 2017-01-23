import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';
import { IPayload, isType, LoginPayload, DidLoginPayload } from '../payload';
import { DispatcherService } from '../services/dispatcher.service';

@Injectable()
export class LoginStore extends FluxStore<boolean, IPayload> {

  constructor(dispatcher: DispatcherService) {
    super(dispatcher);
  }

  getInitialState(): boolean {
    return false;
  }

  reduce(state: boolean, payload: IPayload): boolean {
    if (isType(DidLoginPayload, payload) || isType(LoginPayload, payload)) {
      return true;
    }
    return state;
  }
}
