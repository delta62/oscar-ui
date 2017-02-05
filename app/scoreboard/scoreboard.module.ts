import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }            from '../shared/shared.module';
import { ScoreboardRoutingModule } from './scoreboard-routing.module';

import { ScoreboardComponent } from './scoreboard.component';
import { ScoreListComponent }  from './score-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ScoreboardRoutingModule
  ],
  declarations: [
    ScoreboardComponent,
    ScoreListComponent
  ]
})
export class ScoreboardModule { }
