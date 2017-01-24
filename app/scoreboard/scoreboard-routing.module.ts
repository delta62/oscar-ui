import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScoreboardComponent } from './scoreboard.component';

const routes: Routes = [
  { path: 'scoreboard', component: ScoreboardComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ScoreboardRoutingModule { }
