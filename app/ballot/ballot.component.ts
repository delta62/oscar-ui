import { Component, DoCheck } from '@angular/core';

import { User, UserScore }          from '../shared/model';
import { CategoryComponent }        from './category.component';
import { AccountStore, ScoreStore } from '../shared/stores';

@Component({
  moduleId: module.id,
  selector: 'o-ballot',
  styleUrls: [ './ballot.css' ],
  template: `
    <div class='body'>
      <router-outlet></router-outlet>
      <o-copyright></o-copyright>
    </div>
    <o-header [score]="score" [place]="place" class="header"></o-header>`
})
export class BallotComponent implements DoCheck {
  score: UserScore;
  place: number;

  constructor(
    private scoreStore: ScoreStore,
    private accountStore: AccountStore) { }

  ngDoCheck(): void {
    let user = this.accountStore.state;
    this.score = this.scoreStore.getUserScore(user._id) || UserScore.makeDefault();
    this.place = this.scoreStore.getUserPlacement(user._id);
  }
}
