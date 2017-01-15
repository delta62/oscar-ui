import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { DispatcherService } from '../services/dispatcher.service';
import { LoginPayload } from '../payloads/login';

@Component({
  selector: 'o-login',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" novalidate>
      <div class="form-item">
        <label for="email">Email</label>
        <input id="email" formControlName="email">
      </div>

      <div class="form-item" *ngIf="isNewEmail">
        <label for="name">Name</label>
        <input id="name" formControlName="name">
      </div>

      <button [disabled]="!loginForm.valid">Submit</button>
    </form>`
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isNewEmail: boolean;
  model: User;

  constructor(
      private dispatcher: DispatcherService,
      private formBuilder: FormBuilder) {

    this.model = new User();
  }

  ngOnInit(): void {
    this.loginForm = this.buildForm();
  }

  private buildForm(): FormGroup {
    let nameValidators = this.isNewEmail ? [ Validators.required ] : [ ];
    let newForm = this.formBuilder.group({
      email: [ this.model.email, [ Validators.required ] ],
      name: [ this.model.name, nameValidators ]
    });

    newForm.controls['email'].valueChanges.subscribe(email => {
      this.model.email = email;
    });

    newForm.controls['name'].valueChanges.subscribe(name => {
      this.model.name = name;
    });

    return newForm;
  }

  onSubmit(): void {
    this.isNewEmail = true;
    this.loginForm = this.buildForm();
    // this.dispatcher.dispatch(new LoginPayload({
    //   email: this.model.email
    // }));
  }
};
