import { Component } from '@angular/core';
import { User } from '../model';

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

  onSubmit() {
    console.log('submit');
    console.dir(this.model);
  }
};
