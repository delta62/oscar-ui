import { Component, Input } from '@angular/core';

import { User, UserScoreData, ResponseScore } from '../shared/model';

@Component({
  selector: 'o-user-score',
  template: `
    {{ user.name }}: {{ userScore.totalScore }}

    <div *ngFor="let response of responses">
      <span>{{ response.name }}: {{ response.score }}</span>
      <span *ngIf="response.correct">Correct Answer: {{ reponse.correct }}</span>
      <span *ngIf="response.incorrect">Incorrect Answer: {{ reponse.incorrect }}</span>
      <span *ngIf="response.first">First Correct Answer: {{ reponse.first }}</span>
    </div>
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
