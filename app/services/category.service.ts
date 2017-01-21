import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthToken, Category } from '../model';
import { AuthTokenStore } from '../stores';

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
