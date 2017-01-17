import { Component, OnInit, DoCheck } from '@angular/core';
import { Category } from '../model/category';
import { CategoryStore } from '../stores/category.store';
import { DispatcherService } from '../services/dispatcher.service';
import { CategoriesUpdatedPayload } from '../payloads/categories-updated';
import { Router } from '@angular/router';

@Component({
  template: `
    <o-header></o-header>
    <o-category-preview
      *ngFor="let category of categories"
      [category]="category"
      (click)="navigateToCategory(category._id)"></o-category-preview>`
})
export class CategoriesComponent implements OnInit, DoCheck {
  categories: Array<Category>;

  constructor(
      private categoryStore: CategoryStore,
      private router: Router,
      private dispatcher: DispatcherService) { }

  ngOnInit(): void {
    this.dispatcher.dispatch(new CategoriesUpdatedPayload());
  }

  ngDoCheck(): void {
    this.categories = this.categoryStore.state;
  }

  navigateToCategory(categoryId: string): void {
    this.router.navigateByUrl(`/ballot/${categoryId}`);
  }
};
