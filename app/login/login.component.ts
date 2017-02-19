import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { DispatcherService }        from '../shared/services';
import { LoginPayload, PinPayload } from '../shared/payload';
import { User }                     from '../shared/model';

@Component({
  selector: 'o-login',
  styleUrls: ['output/login/login.css'],
  template: `
    <form novalidate>
      <div>
        <o-textinput type="email" name="email" label="Email"
          #emailControl="ngModel"
          pattern=".+@.+\\..+"
          [(ngModel)]="email"
          [required]="true"
          [disabled]="isPinStep">
        </o-textinput>
        <o-button label="Log In"
          [hidden]="isPinStep"
          [disabled]="!emailControl.valid"
          (click)="nextStep()">
        </o-button>
      </div>

      <div [hidden]="!isPinStep">
        Check your email for a one-time PIN to log in with.
      </div>

      <div [hidden]="!isPinStep">
        <o-textinput label="PIN" name="pin"
          #pinControl="ngModel"
          [required]="true"
          [(ngModel)]="pin"
          pattern="[A-Za-z0-9]{6}">
        </o-textinput>
        <o-button label="Log In"
          [disabled]="!pinControl.valid"
          (click)="submitPin()">
        </o-button>
      </div>

      <a routerLink="../create">Create Account</a>
    </form>`
})
export class LoginComponent {
  email: string;
  pin: string;
  step: number = 1;

  constructor(
      private dispatcher: DispatcherService,
      private router: Router) { }

  nextStep() {
    this.step = 2;
    this.dispatcher.dispatch(new LoginPayload({ email: this.email }))
  }

  get isPinStep() {
    return this.step === 2;
  }

  submitPin(): void {
    this.dispatcher
      .dispatch(new PinPayload({ email: this.email, pin: this.pin }))
      .then(() => this.router.navigateByUrl('/ballot'));
  }
};
