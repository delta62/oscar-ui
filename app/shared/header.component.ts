import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

import { UserScore, User }   from './model';
import { DispatcherService } from './services';
import { LogoutPayload }     from './payload';

@Component({
  selector: 'o-header',
  template: `
      <span (click)="onLogout()">{{ user.name }}</span>
      <span (click)="onScoreClick()">{{ score.score.totalScore }}</span>
    `
})
export class HeaderComponent {
  @Input() user: User;
  @Input() score: UserScore;

  constructor(
    private dispatcher: DispatcherService,
    private router: Router) { }

  onLogout(): void {
    this.dispatcher.dispatch(new LogoutPayload());
    this.router.navigateByUrl('/account/login');
  }

  onScoreClick(): void {
    this.router.navigateByUrl('/scoreboard');
  }
}
