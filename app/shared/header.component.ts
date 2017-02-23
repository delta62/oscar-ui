import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

import { UserScore, User }                  from './model';
import { DispatcherService }                from './services';
import { LogoutPayload, MenuTogglePayload } from './payload';

@Component({
  selector: 'o-header',
  template: `
      <span (click)="onMenuClick()">Menu</span>
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
