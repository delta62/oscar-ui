import { Injectable } from '@angular/core';
import { FluxStore } from 'flux-lite';

import { IPayload, isType, MenuTogglePayload } from '../payload';
import { DispatcherService } from '../services';

@Injectable()
export class MenuVisibilityStore extends FluxStore<boolean, IPayload> {

  constructor (dispatcher: DispatcherService) {
    super(dispatcher);
  }

  protected getInitialState(): boolean {
    return false;
  }

  protected reduce(state: boolean, payload: IPayload): boolean {
    if (isType(MenuTogglePayload, payload)) {
      return !state;
    }
    return state;
  }
}
