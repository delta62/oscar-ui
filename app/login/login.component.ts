import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { DispatcherService } from '../shared/services';
import { LoginPayload }      from '../shared/payload';
import { User }              from '../shared/model';

@Component({
  selector: 'o-login',
  template: `
    <form (ngSubmit)="onSubmit()" #loginForm="ngForm" novalidate>
      <div class="form-item">
        <label for="email">Email</label>
        <input id="email" type="email" name="email" [(ngModel)]="model.email" required>
      </div>

      <button [disabled]="!loginForm.valid">Submit</button>
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
