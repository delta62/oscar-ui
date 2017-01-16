import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { AuthToken } from '../model/auth-token';
import { Http, Headers } from '@angular/http';
import { AuthTokenStore } from '../stores/auth-token.store';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {

  constructor(private http: Http, private authStore: AuthTokenStore) { }

  getCategories(): Promise<Array<Category>> {
    let token: AuthToken = this.authStore.state;
    let headers = new Headers({
      Authorization: `Bearer ${token}`
    });
    return this.http.get(this.buildCategoriesUrl(), { headers })
      .toPromise()
      .then(res => res.json());
  }

  private buildCategoriesUrl(): string {
    return `${AppSettings.baseUrl}/category`;
  }
}
