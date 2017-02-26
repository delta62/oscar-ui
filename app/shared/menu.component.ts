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
    <ol class="menu" >
      <div class="user">
        <span class="person">
          <span></span><span></span>
        </span>
        <span class="name">{{ user.name }}</span>
      </div>
      <a class="item" (click)="onLogoutClick()">Log Out</a>
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
    this.dispatcher.dispatch(new MenuTogglePayload());
  }

  onBackdropClick(): void {
    this.dispatcher.dispatch(new MenuTogglePayload());
  }
}
