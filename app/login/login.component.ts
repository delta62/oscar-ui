import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { DispatcherService } from '../shared/services';
import { LoginPayload }      from '../shared/payload';
import { User }              from '../shared/model';

@Component({
  selector: 'o-login',
  styleUrls: ['output/login/login.css'],
  template: `
    <form novalidate>
      <div>
        <o-textinput
          #emailControl
          type="email"
          name="email"
          label="Email"
          [(ngModel)]="email"
          email
          [required]="true"
          [disabled]="isPinStep">
        </o-textinput>
        <o-button
          label="Next"
          [hidden]="isPinStep"
          [disabled]="!emailControl.valid"
          (click)="nextStep()">
        </o-button>
      </div>

      <div [hidden]="!isPinStep">
        <o-textinput
          #pin
          label="PIN"
          [required]="true"
          pattern="[A-Za-z0-9]{6}">
        </o-textinput>
        <o-button [disabled]="!pin.valid" label="Log In"></o-button>
      </div>

      <a routerLink="../create">Create Account</a>
    </form>`
})
export class LoginComponent {
  email: string;
  pin: string;
  step: number;

  constructor(
      private dispatcher: DispatcherService,
      private router: Router) {
    this.step = 1;
  }

  nextStep() {
    this.step = 2;
  }

  get isPinStep() {
    return this.step === 2;
  }

  onSubmit(): void {
    this.dispatcher
      .dispatch(new LoginPayload({ email: this.email }))
      .then(() => this.router.navigateByUrl('/ballot'));
  }
};
