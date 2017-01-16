import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { DispatcherService } from '../services/dispatcher.service';
import { FluxStore } from 'flux-lite';
import { CategoriesUpdatedPayload } from '../payloads/categories-updated';
import { CategoryService } from '../services/category.service';

@Injectable()
export class CategoryStore extends FluxStore<Array<Category>, CategoriesUpdatedPayload> {

  constructor(dispatcher: DispatcherService, private categoryService: CategoryService) {
    super(dispatcher);
  }

  getInitialState(): Array<Category> {
    return [ ];
  }

  reduce(state: Array<Category>, payload: CategoriesUpdatedPayload): Array<Category> | Promise<Array<Category>>{
    if (payload.type === CategoriesUpdatedPayload.TYPE) {
      return this.categoryService.getCategories();
    }
    return state;
  }
}
