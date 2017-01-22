import { Component, Input } from '@angular/core';
import { User } from '../shared/model/user';
import { Score } from '../shared/model/score';

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
