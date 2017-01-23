import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }            from '../shared/auth-guard';

import { BallotComponent }      from './ballot.component';
import { CategoriesComponent }  from './categories.component';
import { CategoryComponent }    from './category.component';

const ballotRoutes: Routes = [
  {
    path: 'ballot',
    component: BallotComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        component: CategoriesComponent
      },
      {
        path: ':id',
        component: CategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ballotRoutes) ],
  providers: [ AuthGuard ],
  exports: [ RouterModule ]
})
export class BallotRoutingModule { }
