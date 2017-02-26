import { Component }              from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DispatcherService } from '../shared/services/dispatcher.service';
import { NewAccountPayload } from '../shared/payload';
import { User }              from '../shared/model';

@Component({
  moduleId: module.id,
  selector: 'o-newaccount',
  styleUrls: [ './new-account.css' ],
  template: `
    <o-login-banner></o-login-banner>
    <form (ngSubmit)="submit()" #accountForm="ngForm" novalidate>
      <div class="form-item">
        <o-textinput [label]="'Email'" [required]="true" (keyup)="handleChange($event, 'email')"></o-textinput>
      </div>

      <div class="form-item">
        <o-textinput [label]="'Name'" [required]="true" (keyup)="handleChange($event, 'name')"></o-textinput>
      </div>

      <div class="form-item">
        <o-button [disabled]="!accountForm.valid" label="Submit"></o-button>
      </div>
    </form>
    <o-copyright></o-copyright>`
})
export class NewAccountComponent {
  model: User;

  constructor(
    private route: ActivatedRoute,
    private dispatcher: DispatcherService,
    private router: Router) {
    this.model = User.makeDefault();
    }

  handleChange(event: any, prop: string): void {
    this.model[prop] = event.target.value;
  }

  submit(): void {
    this.dispatcher
      .dispatch(new NewAccountPayload({
        email: this.model.email,
        name: this.model.name
      }))
      .then(() => this.router.navigate(
        [ '..', 'login' ],
        { relativeTo: this.route }
      ));
  }
}
