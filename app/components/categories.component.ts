import { Component, OnInit, DoCheck } from '@angular/core';
import { Category } from '../model/category';
import { User } from '../model/user';
import { Score } from '../model/score';
import { CategoryStore } from '../stores/category.store';
import { AccountStore } from '../stores/account.store';
import { DispatcherService } from '../services/dispatcher.service';
import { AppInitPayload } from '../payload';
import { Router } from '@angular/router';
import { ScoreStore } from '../stores/score.store';

@Component({
  template: `
    <o-header [user]="user" [score]="score"></o-header>
    <o-category-preview
      *ngFor="let category of categories"
      [category]="category"
      (click)="navigateToCategory(category)"></o-category-preview>`
})
export class CategoriesComponent implements OnInit, DoCheck {
  categories: Array<Category>;
  score: Score;
  user: User;

  constructor(
      private categoryStore: CategoryStore,
      private accountStore: AccountStore,
      private scoreStore: ScoreStore,
      private router: Router,
      private dispatcher: DispatcherService) { }

  ngOnInit(): void {
    this.dispatcher.dispatch(new AppInitPayload());
  }

  ngDoCheck(): void {
    this.categories = this.categoryStore.state;
    this.user = this.accountStore.state;
    this.score = this.scoreStore.state;
  }

  navigateToCategory(category: Category): void {
    this.router.navigateByUrl(`/ballot/${category._id}`);
  }
};
