import { Component, DoCheck }     from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from '../shared/model/category';
import { Response } from '../shared/model/response';
import { CategoryStore } from '../shared/stores/category.store';
import { ResponseStore } from '../shared/stores/response.store';
import { DispatcherService } from '../shared/services/dispatcher.service';
import { SaveResponsePayload } from '../shared/payload';

@Component({
  selector: 'o-category',
  template: `
    <h1>{{ category.name }}</h1>
    <o-category-admin [category]="category"></o-category-admin>
    <div
      class="category-option"
      *ngFor="let option of category.options; let i = index">
      <input
        (change)="onChoiceChanged(option)"
        [checked]="response.value === option"
        [disabled]="category.closed"
        type="radio"
        name="category.name"
        [id]="'option-' + i"
        value="option">
      <label [for]="'option-' + i">{{ option }}</label>
    </div>`
})
export class CategoryComponent implements DoCheck {
  category: Category;
  response: Response;

  constructor(
      private dispatcher: DispatcherService,
      private route: ActivatedRoute,
      private categoryStore: CategoryStore,
      private responseStore: ResponseStore) { }

  ngDoCheck(): void {
    this.route.params.subscribe((params: Params) => {
      let categoryId = params['id'];
      this.category = this.categoryStore.getById(categoryId) || Category.makeDefault();
      this.response = this.responseStore.getCategoryResponse(categoryId) || Response.makeDefault();
    });
  }

  onChoiceChanged(option: string): void {
    this.dispatcher.dispatch(new SaveResponsePayload({
      categoryId: this.category._id,
      value: option
    }));
  }
}
