import { Component, Input } from '@angular/core';

import { Category }                                       from '../shared/model';
import { DispatcherService }                              from '../shared/services';
import { IPayload, AdminCategoryOpenedPayload, AdminCategoryClosedPayload, AdminCategoryAnsweredPayload } from '../shared/payload';

@Component({
  selector: 'o-category-admin',
  template: `
    <button (click)="toggleCategoryClosed()">{{ categoryCloseText }}</button>
    <label for="answer">Correct Answer</label>
    <select
      id="answer"
      name="answer"
      [disabled]="!category.closed"
      [(ngModel)]="answer"
      (change)="onAnswerChanged()">
      <option>--</option>
      <option *ngFor="let option of category.options">
        {{ option }}
      </option>
    </select>`
})
export class CategoryAdminComponent {
  @Input() category: Category;
  answer: string;

  constructor(private dispatcher: DispatcherService) { }

  get categoryCloseText(): string {
    return this.category.closed ? 'Open Category' : 'Close Category';
  }

  toggleCategoryClosed(): void {
    let payload: IPayload;

    if (this.category.closed) {
      payload = new AdminCategoryOpenedPayload({
        categoryId: this.category._id
      });
    } else {
      payload = new AdminCategoryClosedPayload({
        categoryId: this.category._id
      });
    }
    this.dispatcher.dispatch(payload);
  }

  onAnswerChanged(): void {
    this.dispatcher.dispatch(new AdminCategoryAnsweredPayload({
      categoryId: this.category._id,
      answer: this.answer
    }));
  }
}
