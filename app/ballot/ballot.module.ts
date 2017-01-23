import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BallotRoutingModule } from './ballot-routing.module';

import { BallotComponent }          from './ballot.component';
import { CategoriesComponent }      from './categories.component';
import { CategoryAdminComponent }   from './category-admin.component';
import { CategoryComponent }        from './category.component';
import { CategoryPreviewComponent } from './category-preview.component';
import { HeaderComponent }          from './header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BallotRoutingModule
  ],
  declarations: [
    BallotComponent,
    CategoriesComponent,
    CategoryAdminComponent,
    CategoryComponent,
    CategoryPreviewComponent,
    HeaderComponent
  ]
})
export class BallotModule { }
