import { Component, Input } from '@angular/core';
import { Category } from '../model/category';

@Component({
  selector: 'o-category-preview',
  template: `
    <h3>{{ category.name }}</h3>
    `
})
export class CategoryPreviewComponent {
  @Input() category: Category;
}
