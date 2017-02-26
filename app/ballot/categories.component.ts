import { Component,  DoCheck } from '@angular/core';
import { Router }              from '@angular/router';

import { DispatcherService }                from '../shared/services';
import { Category, Response, Score, User }  from '../shared/model';

import {
  AccountStore,
  CategoryStore,
  ResponseStore,
  ScoreStore
} from '../shared/stores';

@Component({
  template: `
    <o-category-preview
      *ngFor="let category of categories"
      [category]="category"
      [response]="getResponseByCategory(category)"
      (click)="navigateToCategory(category)"></o-category-preview>`
})
export class CategoriesComponent implements DoCheck {
  categories: Array<Category>;
  responses:  Array<Response>;

  constructor(
      private categoryStore: CategoryStore,
      private responseStore: ResponseStore,
      private router: Router,
      private dispatcher: DispatcherService) { }

  ngDoCheck(): void {
    this.categories = this.categoryStore.state;
    this.responses  = this.responseStore.state;
  }

  navigateToCategory(category: Category): void {
    this.router.navigateByUrl(`/ballot/${category._id}`);
  }

  getResponseByCategory(category: Category): Response {
    return this.responses.find((r) => r.category == category._id);
  }
};
