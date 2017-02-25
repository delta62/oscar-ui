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
      <span (click)="onMenuClick()" class='open-btn'>…</span>
      <span (click)="onScoreClick()">{{ score.score.totalScore }}</span>
    `
})
export class HeaderComponent {
  @Input() score: UserScore;

  constructor(
    private dispatcher: DispatcherService,
    private router: Router) { }

  onScoreClick(): void {
    this.router.navigateByUrl('/scoreboard');
  }

  onMenuClick(): void {
    this.dispatcher.dispatch(new MenuTogglePayload());
  }
}
