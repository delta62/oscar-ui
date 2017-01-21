import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services';
import {
  CategoriesComponent,
  CategoryComponent,
  LoginComponent,
  NewAccountComponent
} from './components';

const routes: Routes = [
  { path: '', redirectTo: '/ballot', pathMatch: 'full' },
  { path: 'ballot', canActivate: [ AuthGuard ], component: CategoriesComponent },
  { path: 'ballot/:categoryId', canActivate: [ AuthGuard ], component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newaccount', component: NewAccountComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }
