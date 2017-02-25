import { Component, Input } from '@angular/core';

import { User, UserScoreData, ResponseScore } from '../shared/model';

@Component({
  selector: 'o-user-score',
  template: `
    <h2>{{ user.name }}: {{ userScore.totalScore }}</h2>
    <o-category-score
      *ngFor="let response of responses"
      [score]="response"
      [categoryName]="response.name">
    </o-category-score>
  `
})
export class UserScoreComponent {
  @Input('score') userScore: UserScoreData;
  @Input('user') user: User;

  get responses(): Array<any> {
    return Object.keys(this.userScore.responses).map(key => {
      return <any>Object.assign({ }, { name: key }, this.userScore.responses[key]);
    }).sort((a, b) => b.closed - a.closed);
  }
}
