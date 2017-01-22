import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category, Response } from '../model';
import { CategoryStore, ResponseStore } from '../stores';
import { DispatcherService } from '../services';
import { SaveResponsePayload } from '../payload';

@Component({
  template: `
    <h1>{{ category.name }}</h1>
    <div
      class="category-option"
      *ngFor="let option of category.options; let i = index">
      <input
        (change)="onChoiceChanged(option)"
        [checked]="response.value === option"
        type="radio"
        name="category.name"
        [id]="'option-' + i"
        value="option">
      <label [for]="'option-' + i">{{ option }}</label>
    </div>`
})
export class CategoryComponent implements OnInit {
  category: Category;
  response: Response;

  constructor(
      private dispatcher: DispatcherService,
      private route: ActivatedRoute,
      private categoryStore: CategoryStore,
      private responseStore: ResponseStore) {
    this.category = { _id: '', name: '', options: [ ] };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let categoryId = params['categoryId'];
      this.category = this.categoryStore.getById(categoryId);
      this.response = this.responseStore.getCategoryResponse(categoryId) || { category: '', value: '' };
    });
  }

  onChoiceChanged(option: string): void {
    this.dispatcher.dispatch(new SaveResponsePayload({
      categoryId: this.category._id,
      value: option
    }));
  }
}
