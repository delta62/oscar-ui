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
    <div class='left-content'>
      <span (click)="onMenuClick()" class='open-btn'>…</span>
    </div>
    <div class='right-content'>
      <div class='score' (click)="onScoreClick()">
        <h3>{{ score.score.totalScore }}</h3>
        <h6>Score</h6>
      </div>
      <div class='title' (click)="onTitleClick()">
        <h6>The</h6>
        <h5>Oscars</h5>
        <h5>Ballot</h5>
      </div>
    </div>`
})
export class HeaderComponent {
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
}
