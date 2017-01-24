import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { AppRoutingModule }   from './app-routing.module';
import { BallotModule }       from './ballot/ballot.module';
import { LoginModule }        from './login/login.module';
import { SharedModule }       from './shared/shared.module';
import { ScoreboardModule }   from './scoreboard/scoreboard.module';

import { AppComponent }       from './app.component';
import { NotFoundComponent }  from './not-found.component';
import { CopyrightComponent } from './copyright.component';

@NgModule({
  imports: [
    BallotModule,
    LoginModule,
    BrowserModule,
    ScoreboardModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CopyrightComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
