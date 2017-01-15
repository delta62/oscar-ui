import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DispatcherService } from '../services/dispatcher.service';
import { User } from '../model/user';
import { NewAccountPayload } from '../payloads/new-account';

@Component({
  selector: 'o-newaccount',
  template: `
    <form (ngSubmit)="submit()" #accountForm="ngForm" novalidate>
      <div class="form-item">
        <label for="email">Email</label>
        <input id="email" type="email" name="email" [(ngModel)]="model.email" required>
      </div>

      <div class="form-item">
        <label for="name">Name</label>
        <input id="name" name="name" [(ngModel)]="model.name" required>
      </div>

      <button [disabled]="!accountForm.valid">Submit</button>
    </form>`
})
export class NewAccountComponent {
  model: User;

  constructor(private dispatcher: DispatcherService, private router: Router) {
    this.model = new User();
  }

  submit(): void {
    this.dispatcher
      .dispatch(new NewAccountPayload(this.model))
      .then(() => this.router.navigateByUrl('/login'));
  }
}
