import { Component, DoCheck }     from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Category, Response }                         from '../shared/model';
import { CategoryStore, ResponseStore, AccountStore } from '../shared/stores';
import { DispatcherService }                          from '../shared/services';
import { SaveResponsePayload }                        from '../shared/payload';

@Component({
  moduleId: module.id,
  selector: 'o-category',
  styleUrls: [ './category.css' ],
  template: `
    <o-sub-header [title]="category.name"></o-sub-header>
    <o-category-admin *ngIf="isAdmin" [category]="category"></o-category-admin>
    <div
      class="category-option"
      *ngFor="let option of category.options; let i = index"
      [ngStyle]="{'background-image': getSlug(option)}">
      <div class="text-container">
        <input
          (change)="onChoiceChanged(option)"
          [checked]="response.value === option"
          [disabled]="category.closed"
          type="radio"
          name="category.name"
          [id]="'option-' + i"
          value="option">
        <label [for]="'option-' + i">{{ option }}</label>
      </div>
    </div>`
})
export class CategoryComponent implements DoCheck {
  category: Category;
  response: Response;

  constructor(
      private dispatcher: DispatcherService,
      private route: ActivatedRoute,
      private categoryStore: CategoryStore,
      private authStore: AccountStore,
      private responseStore: ResponseStore) { }

  ngDoCheck(): void {
    this.route.params.subscribe(params => {
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

  get isAdmin(): boolean {
    return this.authStore.state.admin;
  }

  getSlug(option: string): string {
    return 'url(images/' + option.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s/g, '-') + '-wide.jpg)';
  }
}
