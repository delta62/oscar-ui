import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from '../model/category';
import { CategoryStore } from '../stores/category.store';

@Component({
  template: `
    <h1>{{ category.name }}</h1>
    <div
      class="category-option"
      *ngFor="let option of category.options; let i = index">
      <input
        type="radio"
        name="category.name"
        [id]="'option-' + i"
        value="option">
      <label [for]="'option-' + i">{{ option }}</label>
    </div>`
})
export class CategoryComponent implements OnInit {
  category: Category;

  constructor(
      private route: ActivatedRoute,
      private categoryStore: CategoryStore) {
    this.category = new Category();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let categoryId = params['categoryId'];
      this.category = this.categoryStore.getById(categoryId);
    });
  }
}
