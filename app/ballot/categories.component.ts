import { Component,  DoCheck } from '@angular/core';
import { Router }              from '@angular/router';

import { DispatcherService }                       from '../shared/services';
import { Category, Score, User }                   from '../shared/model';
import { AccountStore, CategoryStore, ScoreStore } from '../shared/stores';

@Component({
  template: `
    <o-category-preview
      *ngFor="let category of categories"
      [category]="category"
      (click)="navigateToCategory(category)"></o-category-preview>`
})
export class CategoriesComponent implements DoCheck {
  categories: Array<Category>;

  constructor(
      private categoryStore: CategoryStore,
      private router: Router,
      private dispatcher: DispatcherService) { }

  ngDoCheck(): void {
    this.categories = this.categoryStore.state;
  }

  navigateToCategory(category: Category): void {
    this.router.navigateByUrl(`/ballot/${category._id}`);
  }
};
