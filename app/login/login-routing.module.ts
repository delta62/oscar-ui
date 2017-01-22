import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { NewAccountComponent } from './new-account.component';

const loginRoutes: Routes = [
  {
    path: 'account',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'create', component: NewAccountComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(loginRoutes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule { }
