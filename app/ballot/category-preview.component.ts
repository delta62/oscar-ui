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
          <h4>{{ prefix }}</h4>
          <h3>{{ category.name }}</h3>
          <h6 class='choice'>{{ choice }}</h6>
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

  get prefix(): string {
    if (this.response) { return "Your choice for"; }
    else { return "Cast your vote for"; }
  }

  get choice(): string {
    if (this.response) { return this.response.value }
  }
}
