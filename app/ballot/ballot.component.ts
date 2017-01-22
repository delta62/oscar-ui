import { Component, DoCheck } from '@angular/core';

import { User }  from '../shared/model/user';
import { Score } from '../shared/model/score';
import { AccountStore } from '../shared/stores/account.store';
import { ScoreStore }   from '../shared/stores/score.store';

@Component({
  template: `
    <o-header [user]="user" [score]="score"></o-header>
    <router-outlet></router-outlet>
  `
})
export class BallotComponent implements DoCheck {
  user: User;
  score: Score;

  constructor(
    private scoreStore: ScoreStore,
    private accountStore: AccountStore) { }

  ngDoCheck(): void {
    this.user = this.accountStore.state;
    this.score = this.scoreStore.state;
  }
}
