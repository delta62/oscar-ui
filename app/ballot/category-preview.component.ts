import { Component, Input } from '@angular/core';
import { Category } from '../shared/model';

@Component({
  selector: 'o-category-preview',
  styleUrls: [ './category-preview.css' ],
  template: `
    <div>
      <div class='text-container'>
        <div class='left-content'>
          <h4>Cast your vote for</h4>
          <h2>{{ category.name }}</h2>
        </div>
        <div class='right-content'>
          <div class='right-arrow'></div>
        </div>
      </div>
    </div>
    `
})
export class CategoryPreviewComponent {
  @Input() category: Category;
}
