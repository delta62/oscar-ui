import { FluxStore } from 'flux-lite';
import { Injectable } from '@angular/core';
import { Category } from '../model';
import { DispatcherService } from '../dispatcher.service';
import { isType, AppInitPayload } from '../payload';
import { CategoryService } from '../services';

@Injectable()
export class CategoryStore extends FluxStore<Array<Category>, AppInitPayload> {

  constructor(dispatcher: DispatcherService, private categoryService: CategoryService) {
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
      return this.categoryService.getCategories();
    }
    return state;
  }
}
