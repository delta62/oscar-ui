import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';
import { CategoriesComponent } from './components/categories.component';
import { LoginComponent } from './components/login.component';
import { NewAccountComponent } from './components/new-account.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', canActivate: [ AuthGuard ], component: CategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newaccount', component: NewAccountComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard ]
})
export class AppRoutingModule { }
