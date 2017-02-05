import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScoreboardComponent } from './scoreboard.component';
import { ScoreListComponent }  from './score-list.component';

const routes: Routes = [
  {
    path: 'scoreboard',
    component: ScoreboardComponent,
    children: [
      { path: '', component: ScoreListComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ScoreboardRoutingModule { }
