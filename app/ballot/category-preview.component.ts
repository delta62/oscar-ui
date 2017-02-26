import { Component, Input } from '@angular/core';
import { Category, Response } from '../shared/model';

@Component({
  moduleId: module.id,
  selector: 'o-category-preview',
  styleUrls: [ './category-preview.css' ],
  template: `
    <div class='category' [ngStyle]="{'background-image': slug}">
      <div class='text-container'>
        <div class='left-content'>
          <h4>Cast your vote for</h4>
          <h3>{{ category.name }}</h3>
        </div>
        <div class='right-content'>
          <div class='arrow right'></div>
        </div>
      </div>
    </div>`
})
export class CategoryPreviewComponent {
  @Input() category: Category;
  @Input() response: Response;

  get slug(): string {
    if (this.response) {
      const slug = this.response.value.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s/g, '-');
      return 'url(images/' + slug + '-wide.jpg)';
    }
  }
}
