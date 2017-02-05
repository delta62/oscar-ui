import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';

import { User, Score }       from './model';
import { DispatcherService } from './services';
import { LogoutPayload }     from './payload';

@Component({
  selector: 'o-header',
  template: `
      <span (click)="onLogout()">{{ user.firstName }} {{ user.lastName }}</span>
      <span (click)="onScoreClick()">{{ score.score }}</span>
    `
})
export class HeaderComponent {
  @Input() user: User;
  @Input() score: Score;

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
