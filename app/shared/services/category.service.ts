import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthToken } from '../model/auth-token';
import { Category } from '../model/category';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }

  getCategories(authToken: string): Promise<Array<Category>> {
    let headers = new Headers({
      Authorization: `Bearer ${authToken}`
    });
    return this.http.get(this.buildCategoriesUrl(), { headers })
      .toPromise()
      .then(res => res.json());
  }

  closeCategory(authToken: string, categoryId: string): Promise<void> {
    let headers = new Headers({
      Authorization: `Bearer ${authToken}`
    });
    let body = { closed: new Date() };
    return this.http.patch(this.buildCategoryUrl(categoryId), body, { headers })
      .toPromise()
      .then(_ => null);
  }

  answerCategory(authToken: string, categoryId: string, answer: string): Promise<void> {
    let headers = new Headers({
      Authorization: `Bearer ${authToken}`
    });
    let body = { answer };
    return this.http.patch(this.buildCategoryUrl(categoryId), body, { headers })
      .toPromise()
      .then(_ => null);
  }

  private buildCategoriesUrl(): string {
    return `${AppSettings.baseUrl}/category`;
  }

  private buildCategoryUrl(categoryId: string): string {
    return `${AppSettings.baseUrl}/category/${categoryId}`;
  }
}
