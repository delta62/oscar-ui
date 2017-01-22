import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BallotComponent }      from './ballot.component';
import { CategoriesComponent }  from './categories.component';
import { CategoryComponent }    from './category.component';

const ballotRoutes: Routes = [
  {
    path: 'ballot',
    component: BallotComponent,
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
  exports: [ RouterModule ]
})
export class BallotRoutingModule { }
