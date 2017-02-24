import { Component, Input, OnInit } from '@angular/core';
import { Router }                   from '@angular/router';

import { DispatcherService }                from './services';
import { User }                             from './model';
import { LogoutPayload, MenuTogglePayload } from './payload';

@Component({
  moduleId: module.id,
  selector: 'o-menu',
  styleUrls: [ './menu.css' ],
  template: `
    <div class="backdrop" (click)="onBackdropClick()"></div>
    <ol class="menu">
      <span>{{ user.name }}</span>
      <a (click)="onLogoutClick()">Log Out</a>
    </ol>
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

  onBackdropClick(): void {
    this.dispatcher.dispatch(new MenuTogglePayload());
  }
}
