import { Component, Input } from '@angular/core';
import { Category } from '../shared/model';

@Component({
  selector: 'o-category-preview',
  template: `
    <h3>{{ category.name }}</h3>
    `
})
export class CategoryPreviewComponent {
  @Input() category: Category;
}
