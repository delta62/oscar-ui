import { Component } from '@angular/core';
import { User } from '../model/user';
import { DispatcherService } from '../services/dispatcher.service';
import { LoginPayload } from '../payloads/login';

@Component({
  selector: 'o-login',
  template: `
    <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
      <label for="email">Email</label>
      <input id="email" name="email" [(ngModel)]="model.email" required>

      <label for="name">Name</label>
      <input name="name" id="name" [(ngModel)]="model.name" required>

      <button [disabled]="!loginForm.form.valid">Submit</button>
    </form>`
})
export class LoginComponent {
  model = new User()

  constructor(private dispatcher: DispatcherService) { }

  onSubmit(): void {
    this.dispatcher.dispatch(new LoginPayload({
      email: this.model.email
    }));
  }
};
