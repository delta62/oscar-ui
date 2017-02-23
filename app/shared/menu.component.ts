import { Component, Input, OnInit } from '@angular/core';
import { Router }                   from '@angular/router';

import { DispatcherService } from './services';
import { User }              from './model';
import { LogoutPayload }     from './payload';

@Component({
  selector: 'o-menu',
  template: `
    <span>{{ user.name }}</span>
    <a (click)="onLogoutClick()">Log Out</a>
  `
})
export class MenuComponent implements OnInit {
  @Input() user: User;

  constructor(private dispatcher: DispatcherService, private router: Router) { }

  ngOnInit() {
    this.user = User.makeDefault();
  }

  onLogoutClick(): void {
    this.dispatcher.dispatch(new LogoutPayload());
    this.router.navigateByUrl('/account/login');
  }
}
