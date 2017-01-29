import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import { AuthToken, Category, Identifier } from '../model';

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
      .then(res => res.json())
      .then(res => {
        return res.map((cat: Category) => {
          let ret = Object.assign({ }, cat);
          ret.closed && (ret.closed = new Date(ret.closed));
          return ret;
        });
      });
  }

  closeCategory(authToken: string, categoryId: string): Promise<void> {
    let headers = new Headers({
      Authorization: `Bearer ${authToken}`
    });
    let body = { closed: true };
    return this.http.patch(this.buildCategoryUrl(categoryId), body, { headers })
      .toPromise()
      .then(_ => null);
  }

  openCategory(authToken: AuthToken, categoryId: Identifier): Promise<void> {
    let headers = new Headers({
      Authorization: `Bearer ${authToken}`
    });
    let body = { closed: false };
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
