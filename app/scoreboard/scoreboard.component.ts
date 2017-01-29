import { Component, DoCheck } from '@angular/core';
import { ScoreStore } from '../shared/stores';
import { Score } from '../shared/model';

@Component({
  selector: 'o-scoreboard',
  template: `
    <h1>Scoreboard</h1>
    <div>
      total score: {{ score.totalScore }}
    </div>
    <div *ngFor="let response of score.responses">
      {{ response.name }}: {{ response.score }}
    </div>
  `
})
export class ScoreboardComponent implements DoCheck {
  score: Score;

  constructor(private scoreStore: ScoreStore) { }

  ngDoCheck(): void {
    this.score = this.scoreStore.getUserScore('');
  }
}
