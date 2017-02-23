import { Component, DoCheck } from '@angular/core';

import { ScoreStore, AccountStore } from '../shared/stores';
import { UserScore, User } from '../shared/model';

@Component({
  selector: 'o-scoreboard',
  template: `
    <o-header [score]="score"></o-header>
    <o-sub-header title="Scoreboard"></o-sub-header>
    <router-outlet></router-outlet>`
})
export class ScoreboardComponent implements DoCheck {
  score: UserScore;

  constructor(
    private scoreStore: ScoreStore,
    private accountStore: AccountStore) { }

  ngDoCheck(): void {
    let user = this.accountStore.state;
    this.score = this.scoreStore.getUserScore(user._id) || UserScore.makeDefault();
  }
}
