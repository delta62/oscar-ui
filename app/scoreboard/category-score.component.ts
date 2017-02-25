import { Component, Input } from '@angular/core';

import { ResponseScore } from '../shared/model';

@Component({
  selector: 'o-category-score',
  template: `
    <h3>{{ categoryName }}: {{ score.score }}</h3>
    <h4 *ngIf="isCorrect">Correct Answer: {{ score.correct }}</h4>
    <h4 *ngIf="!isCorrect">Incorrect Answer: {{ score.incorrect }}</h4>
    <h4 *ngIf="isFirstCorrect">First Correct Answer: {{ score.first }}</h4>`
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
