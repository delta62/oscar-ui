import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthToken, Category } from '../model';

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

  private buildCategoriesUrl(): string {
    return `${AppSettings.baseUrl}/category`;
  }
}
