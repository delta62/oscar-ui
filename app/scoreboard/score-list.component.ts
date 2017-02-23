import { Component, DoCheck } from '@angular/core';

import { ScoreStore, UserStore }          from '../shared/stores';
import { UserScore, User, UserScoreData } from '../shared/model';

@Component({
  selector: 'o-score-list',
  template: `
    <o-user-score
      *ngFor="let score of scores"
      [score]="score.score"
      [user]="score.user">
    </o-user-score>
  `
})
export class ScoreListComponent implements DoCheck{
  scores: Array<UserNameAndScore> = [ ];

  constructor (private scoreStore: ScoreStore, private userStore: UserStore) { }

  ngDoCheck(): void {
    this.scores = this.scoreStore.state.map(score => ({
      user: this.userStore.getById(score.userId),
      score: score.score
    })).sort((a, b) => b.score.totalScore - a.score.totalScore);
  }
}

interface UserNameAndScore {
  user: User;
  score: UserScoreData;
}
