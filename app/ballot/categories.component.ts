import { Component, OnInit, DoCheck } from '@angular/core';
import { Router }                     from '@angular/router';
import { DispatcherService } from '../shared/services/dispatcher.service';
import { AppInitPayload }    from '../shared/payload';
import { Category } from '../shared/model/category';
import { User }     from '../shared/model/user';
import { Score }    from '../shared/model/score';
import { CategoryStore } from '../shared/stores/category.store';
import { AccountStore }  from '../shared/stores/account.store';
import { ScoreStore }    from '../shared/stores/score.store';

@Component({
  template: `
    <o-category-preview
      *ngFor="let category of categories"
      [category]="category"
      (click)="navigateToCategory(category)"></o-category-preview>`
})
export class CategoriesComponent implements OnInit, DoCheck {
  categories: Array<Category>;

  constructor(
      private categoryStore: CategoryStore,
      private router: Router,
      private dispatcher: DispatcherService) { }

  ngOnInit(): void {
    this.dispatcher.dispatch(new AppInitPayload());
  }

  ngDoCheck(): void {
    this.categories = this.categoryStore.state;
  }

  navigateToCategory(category: Category): void {
    this.router.navigateByUrl(`/ballot/${category._id}`);
  }
};
