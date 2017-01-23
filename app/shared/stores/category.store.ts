import { FluxStore, Action } from 'flux-lite';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { isType, IPayload, DidLoginPayload } from '../payload';
import { CategoryService } from '../services/category.service';
import { DispatcherService } from '../services/dispatcher.service';
import { AuthTokenStore } from './auth-token.store';

@Injectable()
export class CategoryStore extends FluxStore<Array<Category>, IPayload> {

  constructor(
    dispatcher: DispatcherService,
    private categoryService: CategoryService,
    private authStore: AuthTokenStore) {

    super(dispatcher);
  }

  getById(id: string): Category {
    return this.state.find(cat => cat._id === id);
  }

  getInitialState(): Array<Category> {
    return [ ];
  }

  reduce(state: Array<Category>, payload: IPayload, action: Action<IPayload>): Array<Category> | Promise<Array<Category>>{
    if (isType(DidLoginPayload, payload)) {
      return this.dispatcher.waitFor([ this.authStore.dispatchToken ], action)
        .then(() => this.authStore.state)
        .then(token => this.categoryService.getCategories(token))
    }
    return state;
  }
}
