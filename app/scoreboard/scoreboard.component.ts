import { Component, DoCheck } from '@angular/core';

import { ScoreStore, AccountStore } from '../shared/stores';
import { UserScore, User } from '../shared/model';

@Component({
  moduleId: module.id,
  styleUrls: [ './scoreboard.css' ],
  selector: 'o-scoreboard',
  template: `
    <o-header [score]="score" [place]="place"></o-header>
    <div class="body">
      <div class="scores">
        <o-sub-header title="Scoreboard"></o-sub-header>
        <router-outlet></router-outlet>
      </div>
      <o-copyright></o-copyright>
    </div>`
})
export class ScoreboardComponent implements DoCheck {
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
