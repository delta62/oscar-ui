import { FluxStore } from 'flux-lite';
import { Injectable } from '@angular/core';
import { Category } from '../model';
import { isType, AppInitPayload } from '../payload';
import { CategoryService, DispatcherService } from '../services';
import { AuthTokenStore } from './auth-token.store';

@Injectable()
export class CategoryStore extends FluxStore<Array<Category>, AppInitPayload> {

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

  reduce(state: Array<Category>, payload: AppInitPayload): Array<Category> | Promise<Array<Category>>{
    if (isType(AppInitPayload, payload)) {
      let authToken = this.authStore.state;
      return this.categoryService.getCategories(authToken);
    }
    return state;
  }
}
