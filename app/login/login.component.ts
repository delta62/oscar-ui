import { Component, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router }    from '@angular/router';

import { DispatcherService }        from '../shared/services';
import { LoginPayload, PinPayload } from '../shared/payload';
import { User }                     from '../shared/model';

@Component({
  selector: 'o-login',
  styleUrls: ['output/login/login.css'],
  template: `
    <form (ngSubmit)="onSubmit()" novalidate>
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
          [disabled]="!emailControl.valid">
        </o-button>
      </div>

      <div [hidden]="!isPinStep">
        Check your email for a one-time PIN to log in with.
      </div>

      <div *ngIf="isPinStep">
        <o-textinput label="PIN" name="pin"
          #pinControl="ngModel"
          [required]="true"
          [(ngModel)]="pin"
          pattern="[A-Za-z0-9]{6}">
        </o-textinput>
        <o-button label="Log In" [disabled]="!pinControl.valid">
        </o-button>
      </div>

      <span [hidden]="!invalidAuth">
        Hmm... I don't recognize that email or your PIN was incorrect.
      </span>

      <a routerLink="../create">Create Account</a>
    </form>`
})
export class LoginComponent {
  email:       string;
  pin:         string;
  step:        number = 1;
  invalidAuth: boolean = false;

  constructor(
      private dispatcher: DispatcherService,
      private router: Router) { }

  get isPinStep() {
    return this.step === 2;
  }

  onSubmit(): void {
    this.step === 1
      ? this.submitStep1()
      : this.submitStep2();
  }

  submitStep1(): void {
    this.step = 2;
    this.dispatcher.dispatch(new LoginPayload({ email: this.email }))
  }

  submitStep2(): void {
    this.dispatcher
      .dispatch(new PinPayload({ email: this.email, pin: this.pin }))
      .then(() => this.router.navigateByUrl('/ballot'))
      .catch(this.resetForm.bind(this));
  }

  resetForm(): void {
    this.step = 1;
    this.pin = '';
    this.email = '';
    this.invalidAuth = true;
  }
};
