import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BallotRoutingModule } from './ballot-routing.module';

import { BallotComponent }          from './ballot.component';
import { CategoriesComponent }      from './categories.component';
import { CategoryComponent }        from './category.component';
import { CategoryPreviewComponent } from './category-preview.component';
import { HeaderComponent }          from './header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BallotRoutingModule
  ],
  declarations: [
    BallotComponent,
    CategoriesComponent,
    CategoryComponent,
    CategoryPreviewComponent,
    HeaderComponent
  ]
})
export class BallotModule { }
