import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }            from '../shared/auth-guard';

import { ScoreboardComponent }  from './scoreboard.component';
import { ScoreListComponent }   from './score-list.component';

const routes: Routes = [
  {
    path: 'scoreboard',
    component: ScoreboardComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: ScoreListComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  providers: [ AuthGuard ],
  exports: [ RouterModule ]
})
export class ScoreboardRoutingModule { }
