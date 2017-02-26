import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

import { UserScore, User }                  from './model';
import { DispatcherService }                from './services';
import { LogoutPayload, MenuTogglePayload } from './payload';

@Component({
  moduleId: module.id,
  selector: 'o-header',
  styleUrls: [ './header.css' ],
  template: `
    <div class="left-content">
      <div (click)="onMenuClick()" class="open-btn">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="right-content">
      <div [ngClass]="klass" (click)="onScoreClick()">
        <img *ngIf="place === 1" src="images/oscar-gold.svg" alt="Gold Oscar meeple"/>
        <img *ngIf="place === 2" src="images/oscar-silver.svg" alt="Silver Oscar meeple"/>
        <img *ngIf="place === 3" src="images/oscar-bronze.svg" alt="Bronze Oscar meeple"/>
        <h3>{{ score.score.totalScore }}</h3>
        <h6>Score</h6>
      </div>
      <div class="title" (click)="onTitleClick()">
        <h6>The</h6>
        <h5>Oscars</h5>
        <h5>Ballot</h5>
      </div>
    </div>`
})
export class HeaderComponent {
  @Input() place: number;
  @Input() score: UserScore;

  constructor(
    private dispatcher: DispatcherService,
    private router: Router) { }

  onScoreClick(): void {
    this.router.navigateByUrl('/scoreboard');
  }

  onTitleClick(): void {
    this.router.navigateByUrl('/ballot');
  }

  onMenuClick(): void {
    this.dispatcher.dispatch(new MenuTogglePayload());
  }

  get isPlaced(): boolean {
    return this.place > 0 && this.place < 4;
  }

  get klass(): string {
    let ret = 'score ';
    this.place === 1 && (ret += 'first');
    this.place === 2 && (ret += 'second');
    this.place === 3 && (ret += 'third');
    return ret;
  }
}
