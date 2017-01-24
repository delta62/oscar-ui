import { Component,  DoCheck } from '@angular/core';
import { Router }              from '@angular/router';
import { DispatcherService } from '../shared/services/dispatcher.service';
import { Category, Score, User } from '../shared/model';
import { CategoryStore } from '../shared/stores/category.store';
import { AccountStore }  from '../shared/stores/account.store';
import { ScoreStore }    from '../shared/stores/score.store';

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
