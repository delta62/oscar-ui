import { Component, OnInit, DoCheck } from '@angular/core';
import { Category } from '../model/category';
import { CategoryStore } from '../stores/category.store';
import { DispatcherService } from '../services/dispatcher.service';
import { CategoriesUpdatedPayload } from '../payloads/categories-updated';

@Component({
  template: `
    <o-header></o-header>
    <o-category-preview
      *ngFor="let category of categories"
      [category]="category"></o-category-preview>`
})
export class CategoriesComponent implements OnInit, DoCheck {
  categories: Array<Category>;

  constructor(
      private categoryStore: CategoryStore,
      private dispatcher: DispatcherService) { }

  ngOnInit(): void {
    this.dispatcher.dispatch(new CategoriesUpdatedPayload());
  }

  ngDoCheck(): void {
    this.categories = this.categoryStore.state;
  }
};
