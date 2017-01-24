import { Component, Input } from '@angular/core';

import { Category }                                       from '../shared/model';
import { DispatcherService }                              from '../shared/services';
import { CategoryClosedPayload, CategoryAnsweredPayload } from '../shared/payload';

@Component({
  selector: 'o-category-admin',
  template: `
    <button (click)="closeCategory()">
      {{ category.closed ? 'Open Category' : 'Close Category' }}
    </button>
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

  closeCategory(): void {
    this.dispatcher.dispatch(new CategoryClosedPayload({
      categoryId: this.category._id
    }));
  }

  onAnswerChanged(): void {
    this.dispatcher.dispatch(new CategoryAnsweredPayload({
      categoryId: this.category._id,
      answer: this.answer
    }));
  }
}
