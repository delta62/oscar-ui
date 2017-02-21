import { Component, DoCheck } from '@angular/core';

import { ScoreStore, AccountStore } from '../shared/stores';
import { UserScore, User } from '../shared/model';

@Component({
  selector: 'o-scoreboard',
  template: `
    <o-header [user]="user" [score]="score"></o-header>
    <router-outlet></router-outlet>`
})
export class ScoreboardComponent implements DoCheck {
  user: User;
  score: UserScore;

  constructor(
    private scoreStore: ScoreStore,
    private accountStore: AccountStore) { }

  ngDoCheck(): void {
    this.user = this.accountStore.state;
    this.score = this.scoreStore.getUserScore(this.user._id) || UserScore.makeDefault();
  }
}
