import { Component, Input } from '@angular/core';

import { ResponseScore } from '../shared/model';

@Component({
  moduleId: module.id,
  styleUrls: [ './category-score.css' ],
  selector: 'o-category-score',
  template: `
    <h3>{{ categoryName }}: {{ score.score }}</h3>
    <div class="breakdown">
      <div *ngIf="isCorrect">
        <span>{{ score.correct }}</span>
        <span>(Correct)</span>
      </div>
      <div *ngIf="!isCorrect">
        <span>0</span>
        <span>(Incorrect)</span>
      </div>
      <div *ngIf="isFirstCorrect">
        <span>+ {{ score.first }}</span>
        <span>(First Correct)</span>
      </div>
    </div>`
})
export class CategoryScoreComponent {
  @Input() categoryName: string;
  @Input() score: ResponseScore;

  get isCorrect(): boolean {
    return this.score.correct !== undefined;
  }

  get isFirstCorrect(): boolean {
    return !!this.score.first;
  }
}
