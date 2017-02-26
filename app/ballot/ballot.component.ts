import { Component, DoCheck } from '@angular/core';

import { User, UserScore }          from '../shared/model';
import { CategoryComponent }        from './category.component';
import { AccountStore, ScoreStore } from '../shared/stores';

@Component({
  moduleId: module.id,
  selector: 'o-ballot',
  styleUrls: [ './ballot.css' ],
  template: `
    <o-header [score]="score"></o-header>
    <div class='body'>
      <router-outlet></router-outlet>
      <o-copyright></o-copyright>
    </div>`
})
export class BallotComponent implements DoCheck {
  score: UserScore;

  constructor(
    private scoreStore: ScoreStore,
    private accountStore: AccountStore) { }

  ngDoCheck(): void {
    let user = this.accountStore.state;
    this.score = this.scoreStore.getUserScore(user._id) || UserScore.makeDefault();
  }
}
