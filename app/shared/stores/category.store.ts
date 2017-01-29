import { FluxStore, Action } from 'flux-lite';
import { Injectable } from '@angular/core';

import { AuthToken, Category } from '../model';
import {
  isType,
  IPayload,
  DidLoginPayload,
  AdminCategoryClosedPayload,
  AdminCategoryOpenedPayload,
  AdminCategoryAnsweredPayload,
  CategoryOpenedPayload,
  CategoryClosedPayload,
  CategoryAnsweredPayload
} from '../payload';
import { CategoryService, DispatcherService } from '../services';
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
      return this.waitForAuthToken(action)
        .then(token => this.categoryService.getCategories(token))
    }
    if (isType(AdminCategoryOpenedPayload, payload)) {
      let { categoryId } = <AdminCategoryOpenedPayload>payload;
      return this.waitForAuthToken(action)
        .then(token => this.categoryService.openCategory(token, categoryId))
        .then(_ => this.state);
    }
    if (isType(AdminCategoryClosedPayload, payload)) {
      let { categoryId } = <AdminCategoryClosedPayload>payload;
      return this.waitForAuthToken(action)
        .then(token => this.categoryService.closeCategory(token, categoryId))
        .then(_ => this.state);
    }
    if (isType(AdminCategoryAnsweredPayload, payload)) {
      let { categoryId, answer } = <AdminCategoryAnsweredPayload>payload;
      return this.waitForAuthToken(action)
        .then(token => this.categoryService.answerCategory(token, categoryId, answer))
        .then(_ => this.state);
    }
    if (isType(CategoryOpenedPayload, payload)) {
      let { categoryId } = <CategoryOpenedPayload>payload;
      return this.state.map(cat => {
        let ret = Object.assign({ }, cat);
        ret._id === categoryId && (ret.closed = null);
        return ret;
      });
    }
    if (isType(CategoryClosedPayload, payload)) {
      let { categoryId } = <CategoryClosedPayload>payload;
      return this.state.map(cat => {
        let ret = Object.assign({ }, cat);
        ret._id === categoryId && (ret.closed = new Date());
        return ret;
      });
    }
    if (isType(CategoryAnsweredPayload, payload)) {
      let { categoryId, answer } = <CategoryAnsweredPayload>payload;
      return this.state.map(cat => {
        let ret = Object.assign({ }, cat);
        ret._id === categoryId && (ret.answer = answer);
        return ret;
      });
    }
    return state;
  }

  private waitForAuthToken(action: Action<IPayload>): Promise<AuthToken> {
    return this.dispatcher
      .waitFor([ this.authStore.dispatchToken ], action)
      .then(() => this.authStore.state);
  }
}
