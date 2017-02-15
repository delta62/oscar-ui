import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { DispatcherService } from '../shared/services';
import { LoginPayload }      from '../shared/payload';
import { User }              from '../shared/model';

@Component({
  selector: 'o-login',
  styleUrls: ['output/login/login.css'],
  template: `
    <form (ngSubmit)="onSubmit()" #loginForm="ngForm" novalidate>
      <div class="form-item text-input">
        <o-textinput [label]="'Email'" [required]="true"></o-textinput>
      </div>
      <o-button [disabled]="!loginForm.valid" [label]="'Submit'"></o-button>
      <a routerLink="../create">Create Account</a>
    </form>`
})
export class LoginComponent {
  model: User;

  constructor(
      private dispatcher: DispatcherService,
      private router: Router) {
    this.model = User.makeDefault();
  }

  onSubmit(): void {
    this.dispatcher
      .dispatch(new LoginPayload({ email: this.model.email }))
      .then(() => this.router.navigateByUrl('/ballot'));
  }
};
