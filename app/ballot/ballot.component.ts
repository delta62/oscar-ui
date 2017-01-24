import { Component, DoCheck } from '@angular/core';

import { User, Score }  from '../shared/model';
import { CategoryComponent } from './category.component';
import { AccountStore, ScoreStore } from '../shared/stores';

@Component({
  selector: 'o-ballot',
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
