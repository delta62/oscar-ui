import { Component, Input } from '@angular/core';
import { User, Score } from '../model';

@Component({
  selector: 'o-header',
  template: `
      {{ user.name }}
      {{ score.totalScore }}
    `
})
export class HeaderComponent {
  @Input() user: User;
  @Input() score: Score;
}
